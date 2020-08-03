<template>
  <div class="container">
    <div>
      <b-container fluid>
        <b-row align-v="center" v-for="(Card, i) in getList" :key="i">
          <Card :card="Card" />
      </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { Action } from "vuex-module-decorators";
import { movieModule } from "~/store";

export default Vue.extend({
  data() {
    return {
    };
  },
  computed: {
    getList() {
      return movieModule.movies
    }
  },
  async created() {
    movieModule.getMovies()
  },
});
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
