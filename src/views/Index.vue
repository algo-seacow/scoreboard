<template>
  <v-container fill-height>
    <v-layout wrap align-content-center align-center> 
      <v-flex>
        <v-form @submit="go" v-model="valid">
          <v-text-field
            v-model="repoUrl"
            label="Your Repository URL"
            placeholder="https://github.com/algo-seacow/Competitive-Programming"
            :rules="repoUrlRules"
            required
            />
          <v-text-field
            v-model="gistUrl"
            label="Problem Sets Gist URL"
            :rules="gistUrlRules"
            required
            />
          <v-btn
            block
            color="primary"
            type="submit"
            >Go</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const repoUrlRegex = /^(?:https?:\/\/)?github.com\/([^/]*)\/([^/]*)\/?$/
const gistUrlRegex = /^(?:https?:\/\/)?gist.github.com\/(?:[^/]*\/)?([^/]*)\/?$/

export default {
  name: "Index",
  data() {
    return {
      valid: false,
      repoUrl: "",
      gistUrl: `https://gist.github.com/${this.defaultGist}`,
      repoUrlRules: [
        v => !!v || "Your repository URL is required",
        v => repoUrlRegex.test(v) || "Not a valid repository URL"
      ],
      gistUrlRules: [
        v => !!v || "Problem sets Gist URL is required",
        v => gistUrlRegex.test(v) || "Not a valid Gist URL"
      ],
    }
  },
  methods: {
    go(e) {
      e.preventDefault()
      if (this.valid) {
        let repoMD = repoUrlRegex.exec(this.repoUrl)
        let gistMD = gistUrlRegex.exec(this.gistUrl)
        this.$router.push({
          name: "Scoreboard",
          query: {
            user: repoMD[1],
            repo: repoMD[2],
            gist: gistMD[1]
          }
        })
      }
    }
  },
  created() {
    let user = localStorage.getItem("user")
    let repo = localStorage.getItem("repo")
    if (user && repo)
      this.repoUrl = `https://github.com/${user}/${repo}`
    let gist = localStorage.getItem("gist")
    if (gist)
      this.gistUrl = `https://gist.github.com/${gist}`
  }
}
</script>

<style scoped>
.v-text-field {
  margin-bottom: 8px;
  padding-top: 24px;
}

.v-text-field >>> .v-label {
  top: -10px;
  font-size: 32px;
  height: 36px;
  line-height: 36px;
}
</style>
