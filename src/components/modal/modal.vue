<template>
  <div class="overlay">
    <div class="content">
      <img :src="val.img_src">
      <p class="txt">{{ val.desc }}</p>
      <p v-html="val.url"></p>
      <p>作業範囲：{{ val.range }}</p>
      <p>使用技術：{{ val.lang }}</p>
      <p>作業時間：{{ val.time }}</p>
      <div class="close-btn" @click="$emit('close')">
        <span class="btn-bar btn-bar--01"></span>
        <span class="btn-bar btn-bar--02"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['val']
}
</script>
<style>
.overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: auto;
  transition: all .3s;
}

.content{
  position: relative;
  z-index:2;
  width:66%;
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: #fff;
  transition: all .3s;
}
@media (max-width: 980px) {
  .content {
    width: 92%;
    padding: 1em 20px;
  }
}

.content > img {
  width: 50%;
}
@media (max-width: 980px) {
  .content > img {
    width: 100%;
  }
}
.content > p {
  width: 50%;
  margin: 0 auto;
  text-align: left;
  font-size: 1.3rem;
}
@media (max-width: 980px) {
  .content > p {
    width: 100%;
  }
}
.content > .txt {
  line-height: 1.8;
  margin-bottom: 10px;
}
.close-btn {
  display: block;
  z-index: 6;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  transition: .24s ease;
}
.btn-bar {
  display: block;
  position: absolute;
  height: 3px;
  width: 30px;
  background-color: #2c3e50;
  transition: .24s ease;
}
.btn-bar--01 {
  top: 26px;
  left: 12px;
  transform: rotate(-45deg);
}
.btn-bar--02 {
  top: 26px;
  left: 12px;
  transform: rotate(45deg);
}
</style>
