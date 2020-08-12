import Vue from "vue"
import axios from "axios"

const createClient = () => {
  return axios.create({
    baseURL: "https://api.github.com"
  })
}

const GitHub = {
  install(Vue) {
    Vue.github = Vue.prototype.github = {
      client: null,
      queue: [],
      async initialize() {
        this.client = createClient()
        for (let request of this.queue) {
          let data = await this.request(
            request.method,
            request.url,
            request.data
          )
          request.resolve(data)
        }
        this.queue = []
      },
      clear() {
        this.client = null
      },
      async getSolved(user, repo, pss) {
        let solved = {}
        for (let ps of pss)
          for (let problem of ps.problems)
            if (!(problem.oj_short_name in solved))
              solved[problem.oj_short_name] = problem.oj_full_name
        for (let [short, full] of Object.entries(solved)) {
          try {
            solved[short] = new Set((await this.getFiles(user, repo, short, full)).map(file => file.name.split(".")[0]))
          } catch (e) {
            delete solved[short]
          }
        }
        return solved
      },
      async getFiles(user, repo, short, full) {
        try {
          return await this.getRepoFiles(user, repo, short.toLowerCase())
        } catch (e) {
          return await this.getRepoFiles(user, repo, full.replace(/\s/g, '').toLowerCase())
        }
      },
      async getRepoFiles(user, repo, path = "") {
        return await this.get(`/repos/${user}/${repo}/contents/${path}`)
      },
      async getProblemSets(id) {
        let raw_url = (await this.getGist(id))["files"]["problem_sets.json"]["raw_url"]
        return await this.get(raw_url)
      },
      async getGist(id) {
        return await this.get(`/gists/${id}`)
      },
      async get(url) {
        return await this.request("GET", url)
      },
      request(method, url, data = null) {
        return new Promise((resolve, reject) => {
          if (this.client) {
            this.client.request({ method, url, data }).then(response => {
              resolve(response.data)
            }, () => {
              let reason = "Something went wrong."
              console.log(reason)
              reject(reason)
            })
          } else
            this.queue.push({
              method,
              url,
              data,
              resolve
            })
        })
      }
    }
  }
}

Vue.use(GitHub)
