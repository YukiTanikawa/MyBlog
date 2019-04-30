<template>
  <div>
    <article>
      <h2>言語</h2>
      <LanguageTemplate language="c" comment="3年時に1年ほど授業で触りました"></LanguageTemplate>
      <LanguageTemplate
        language="JavaScript"
        comment="2年時に1年ほど授業で触りました。DOMも少しできます。フレームワークはVueを少しだけ..."
      ></LanguageTemplate>
      <LanguageTemplate language="HTML" comment="HTML5はちょっとできる。"></LanguageTemplate>
      <LanguageTemplate language="LaTeX" comment="3年時からレポートはこれで書いてます。使いこなせるとは言っていない。"></LanguageTemplate>
    </article>
  </div>
</template>

<script>
import LanguageTemplate from "@/components/LanguageTemplate.vue";

export default {
  name: "Language",
  components: {
    LanguageTemplate
  }
};
</script>

<style lang = "scss" scoped>
@import "@/components/common/h.scss";
</style>

