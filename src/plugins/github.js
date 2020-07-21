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
      async getZJSolved(user, repo) {
        return (await this.getZJFiles(user, repo)).map(file => file.name.split(".")[0])
      },
      async getZJFiles(user, repo) {
        try {
          return await this.getFiles(user, repo, "zj")
        } catch (e) {
          return await this.getFiles(user, repo, "zerojudge")
        }
      },
      async getFiles(user, repo, path = "") {
        return await this.get(`/repos/${user}/${repo}/contents/${path}`)
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
