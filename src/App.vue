<template>
  <div id="app" class="app-style">
    <div id="header" class="header">
      <ul class="header__list impact">
        <li class="header__list__item"><router-link to="./">Home</router-link></li>
        <li class="header__list__item"><router-link to="./Profile">Profile</router-link></li>
        <li class="header__list__item"><router-link to="./Skill">Skill</router-link></li>
        <li class="header__list__item"><router-link to="./Work">Work</router-link></li>
      </ul>
    </div>
    <main class="main">
      <div class="main-wrap">
        <transition mode="out-in">
        <router-view />
        </transition>
      </div>
    </main>
    <footer class="footer">
      <p>Nagase Portfolio</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    const title = 'Nagase Portfolio'
    const description = '永瀬のポートフォリオサイトです。'
    document.title = title
    document.querySelector("meta[property='og:title']").setAttribute('content', title)
    document.querySelector("meta[name='description']").setAttribute('content', description)
    document.querySelector("meta[property='og:description']").setAttribute('content', description)
  }
}
</script>

<style>

@import url('https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.min.css');
html {
  font-size: 62.5%;
}
body {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2;
}
@media (max-width: 980px) {
  body {
    font-size: 1.6rem;
  }
}
body.open {
  overflow: hidden;
}
.main {
  min-height: calc(100vh - 100px);
  background: url(./assets/bg.png) no-repeat center center/cover;
  /* background-attachment: fixed; */
  padding-top: 30px;
}
.main-wrap {
  width: 960px;
  margin: 0 auto;
}
@media (max-width: 980px) {
  .main-wrap {
    width: 100%;
    padding: 0 20px;
  }
}
.impact {
  font-family: 'Impact';
}
.app-style {
  font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  letter-spacing: .1em;
}
.header__list {
  display: flex;
  font-size: 4rem;
}
@media (max-width: 980px) {
  .header__list {
    font-size: 1.8rem;
  }
}

.header a {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 10px;
  padding: 3px 10px;
  border-radius: 10px;
}
.header a:hover {
  background-color: #2c3e50;
  color: #fff;
  transition: all .3s;
}
.header a.router-link-exact-active {
  background-color: #2c3e50;
  color: #fff;
}
.footer {
  background-color: #fafafa;
  padding: 12px 0;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
