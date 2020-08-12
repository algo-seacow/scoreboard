<template>
  <v-container>
    <h1 class="scoreboard-title">
      <a :href="link" target="_blank">{{user}}</a>'s Scoreboard
    </h1>
    <v-btn
      small
      text
      replace
      to="/"
      >back</v-btn>
    <div v-for="problemSet in problemSets" :key="problemSet.title">
      <h4>{{ problemSet.title }}</h4>
      <template v-for="(problem, index) in problemSet.problems">
        <span v-if="index != 0" :key="index"> | </span>
        <a
          :class="solved[problem.oj_short_name] && solved[problem.oj_short_name].has(problem.problem_id) ? 'solved' : 'unsolved'"
          :key="problem.problem_id"
          :href="problem.problem_url"
          target="_blank"
          >{{ problem.oj_short_name }} {{ problem.problem_id }}
        </a>
      </template>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Scoreboard",
  props: ["user", "repo", "gist"],
  data() {
    return {
      link: `https://github.com/${this.user}/${this.repo}`,
      solved: {},
      problemSets: []
    }
  },
  async created() {
    if (!this.user || !this.repo || !this.gist) {
      this.$router.replace({ name: "Index" })
      return
    }
    this.problemSets = await this.github.getProblemSets(this.gist)
    this.solved = await this.github.getSolved(this.user, this.repo, this.problemSets)
    localStorage.setItem("user", this.user)
    localStorage.setItem("repo", this.repo)
    localStorage.setItem("gist", this.gist)
  }
}
</script>

<style scoped>
.container {
  text-align: left;
}
.scoreboard-title {
  display: inline-block;
}
.solved {
  color: green;
  font-weight: bold;
}
.unsolved {
  color: unset;
}
</style>
