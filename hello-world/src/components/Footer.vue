<template>
  <div id="Footer">
    <h4>ページ内リンク</h4>
    <ul>
      <li>
        <router-link to="/">ホーム</router-link>
      </li>
      <li>
        <router-link to="/About">私について</router-link>
      </li>
      <li>
        <router-link to="/Language">言語</router-link>
      </li>
      <li>
        <router-link to="/Made">作ったものたち</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "@/components/common/h.scss";
#Footer {
  background: #c0c0b0;
}
</style>
