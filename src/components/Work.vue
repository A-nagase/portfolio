<template>
   <div class="work-wrap">
     <div class="work-heading">
        <p>今まで担当した案件の一部をまとめました。</p>
      </div>
      <div class="work">
        <div class="item-list" v-for="(item,key) in items" :key="key">
        <div class="card"><img  @click="openModal(item)" :src="item.img_src" alt="Card image"></div>
        <transition mode="out-in">
        <modal :val="postItem" v-show="showContent" @close="closeModal" />
        </transition>
      </div>
    </div>
   </div>
</template>

<script>
import modal from '../components/modal/modal.vue'
export default {
  components: {
    modal
  },
  data () {
    return {
      showContent: false,
      postItem: '',
      items: [
        { id: 1,
          desc: '自身のポートフォリオサイトをSPAで作成しました。モーダルをライブラリを使わずに実装したのですがなかなかうまくいかず時間が掛かりました。もう少し改良したいです。',
          range: 'デザイン、コーディング',
          lang: 'HTML, CSS, Vue.js, vue-cli,',
          time: '約20時間',
          img_src: require('../assets/portfolio.png')
        },
        {
          id: 2,
          desc: '製品サイトのリニューアル案件です。製品詳細ページのスライダー部分はslick.jsをカスタマイズして使用してます。タスクランナーはいままでglupを使用していたのですが、この案件ではnpm-scriptsでタスクを処理するという方法をとりました。',
          url: '<a href="https://www.leaffresh.jp/" target="_blank">https://www.leaffresh.jp/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML(ejs), CSS(Sass), jQuery',
          time: '約40時間',
          img_src: require('../assets/leaffresh.png')
        },
        {
          id: 3,
          desc: 'コーポレートサイトのリニューアル案件です。背景に斜線があったりとCSS的に難しいところが多く苦労しました。TOPの円グラフがそれぞれリンクになっているんですが、ここではじめてmapタグの存在を知りました。',
          url: '<a href="https://www.coprosystem.co.jp/" target="_blank">https://www.coprosystem.co.jp/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS(Sass), jQuery',
          time: '約160時間',
          img_src: require('../assets/copro.png')
        },
        {
          id: 4,
          desc: 'コーポレートサイトの新規案件です。こちらはアクセシビリティ対応をしてほしいとのことだったので、全ての操作がキーボードで完結するなどアクセシビリティを意識したコーディングを心がけました。',
          url: '<a href="https://www.cet-tyb.com/" target="_blank">https://www.cet-tyb.com/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML(Pug), CSS(Sass), glup, jQuery',
          time: '約80時間',
          img_src: require('../assets/cet.png')
        },
        {
          id: 5,
          desc: 'コーポレートサイトのリニューアル案件です。採用サイトと合わせて30ページ程の規模です。',
          url: '<a href="https://www.tomypure.co.jp/" target="_blank">https://www.tomypure.co.jp/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS, jQuery',
          time: '約160時間',
          img_src: require('../assets/tommy.png')
        },
        {
          id: 6,
          desc: 'レストランのサイトです。',
          url: '<a href="http://www.masa-shimazaki.com/" target="_blank">http://www.masa-shimazaki.com/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS, jQuery',
          time: '約8時間',
          img_src: require('../assets/masa.png')
        }
      ]
    }
  },
  methods: {
    openModal (item) {
      this.showContent = true
      this.postItem = item
    },
    closeModal () {
      this.showContent = false
    }
  }
}
</script>
<style scoped>
.work {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.item-list {
  box-shadow: 0 2px 10px #999;
  transition: all .3s;
  margin-bottom: 30px;
  cursor: pointer;
}
.item-list:hover {
  /* transform: scale(1.05); */
  box-shadow: 0 28px 56px rgba(0,0,0,.3), 0 10px 10px rgba(0,0,0,.27);
}
.card {
  background: #fff;
}
.work-heading {
  margin-bottom: 30px;
}
.v-enter-active, .v-leave-active {
  transition: opacity .3s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
