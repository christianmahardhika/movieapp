<template>
  <div>
    <b-card
      :title="card.title"
      :img-src="backdrop"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ card.overview }}
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
interface card {
  title: string
  overview: string
  backdrop_path: string
}
export default Vue.extend({
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    } as PropOptions<card>,
  },
  computed: {
    backdrop(): string {
      return "https://image.tmdb.org/t/p/w500" + this.card.backdrop_path
    }
  }
})
</script>