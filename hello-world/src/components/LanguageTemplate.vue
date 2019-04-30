<template>
  <section>
    <h3>{{language}}</h3>
    <p>{{comment}}</p>
  </section>
</template>

<script>
export default {
  name: "LanguageTemplate",
  props: {
    language: String,
    comment: String
  }
};
</script>

<style>
</style>
