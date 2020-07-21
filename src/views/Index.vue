<template>
  <v-container fill-height>
    <v-layout wrap align-content-center align-center> 
      <v-flex>
        <v-form @submit="go" v-model="valid">
          <h1>Scoreboard</h1>
          <v-text-field
            v-model="repoUrl"
            label="Repository URL"
            :rules="repoUrlRules"
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
const repoUrlRegex = /^https?:\/\/github.com\/([^/]*)\/([^/]*)\/?$/

export default {
  name: 'Index',
  data() {
    return {
      valid: false,
      repoUrl: '',
      repoUrlRules: [
        v => !!v || 'Repository URL is required',
        v => repoUrlRegex.test(v) || 'Not a valid repository URL'
      ]
    }
  },
  methods: {
    go(e) {
      e.preventDefault()
      if (this.valid) {
        let md = repoUrlRegex.exec(this.repoUrl)
        this.$router.replace({
          name: "Scoreboard",
          query: {
            user: md[1],
            repo: md[2]
          }
        })
      }
    }
  }
}
</script>
