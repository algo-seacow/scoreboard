<template>
  <v-container>
    <h1>{{user}}'s Scoreboard</h1>
    <div v-for="problemSet in problemSets" :key="problemSet.title">
      <h4>{{ problemSet.title }}</h4>
      <template v-for="(problem, index) in problemSet.problems">
        <span v-if="index != 0" :key="index"> | </span>
        <span :class="solved && solved.has(problem) ? 'solved' : ''" :key="problem">
          {{ problem }}
        </span>
      </template>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Scoreboard",
  props: ["user", "repo"],
  data() {
    return {
      solved: null
    }
  },
  async created() {
    if (!this.user || !this.repo)
      this.$router.replace({ name: "Index" })
    this.solved = new Set(await this.github.getZJSolved(this.user, this.repo))
    console.log(this.solved)
  }
}
</script>

<style scoped>
.container {
  text-align: left;
}
.solved {
  color: green;
  font-weight: bold;
}
</style>
