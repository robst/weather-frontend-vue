<template>
  <div class="subline">{{ subline }}</div>
</template>

<style src="./Subline.scss" lang="scss"></style>

<script>
export default {
  name: "Subline",
  props: {
    subline: {
      type: String,
      required: true
    }
  }
};
</script>