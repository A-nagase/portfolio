<template>
  <div class="skill">
    <div class="skill-txt">
      <p></p>
    </div>
    <div class="skill-box lang">
      <p>言語</p>
      <span>HTML</span>
      <span>CSS</span>
      <span>Javascript</span>
      <span>node.js</span>
    </div>
    <div class="skill-box frame">
      <p>ライブラリ・フレームワーク</p>
      <span>Vue.js</span>
      <span>jQuery</span>
      <span>bootstrap</span>
    </div>
    <div class="skill-box tools">
      <p>ツール</p>
      <span>Git</span>
      <span>Slack</span>
      <span>gulp</span>
      <span>npm</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill'
}
</script>

<style scoped>
.skill-txt {
  margin-bottom: 30px;
}
.skill span {
  font-size: 3rem;
  color: #fff;
  background-color: #2c3e50;
  padding: 5px 30px;
  border-radius: 5px;
  letter-spacing: .1em;
  display: inline-block;
  margin: 0 10px 10px 0;
  line-height: 1.5;
}
@media (max-width: 980px) {
  .skill span {
    font-size: 2rem;
  }
}
.skill-box {
  margin-bottom: 20px;
}
.skill-box:last-child {
  margin-bottom: 0;
}
.skill-box p {
  font-size: 2rem;
}
</style>
