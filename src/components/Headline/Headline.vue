<template>
  <div class="headline">{{ headline }}</div>
</template>

<style src="./Headline.scss" lang="scss"></style>

<script>
export default {
  name: "Headline",
  props: {
    headline: {
      type: String,
      required: true
    }
  }
};
</script>