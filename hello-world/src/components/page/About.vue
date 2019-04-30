<template>
  <div>
    <h2>私について</h2>
    <table align="center" border="1">
      <tr>
        <th>名前</th>
        <td>谷川 友基</td>
      </tr>
      <tr>
        <th>学校学科学年</th>
        <td>福井工業高等専門学校電子情報工学科5年</td>
      </tr>
      <tr>
        <th>誕生日</th>
        <td>1999/8/6</td>
      </tr>
      <tr>
        <th>部活</th>
        <td>囲碁将棋部</td>
      </tr>
      <tr>
        <th>Mail</th>
        <td>tanikawa51519_at_gmail.com</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
@import "@/components/common/h.scss";
th {
  background-color: #cccccc;
}
td {
  background-color: #fafafa;
}
</style>
