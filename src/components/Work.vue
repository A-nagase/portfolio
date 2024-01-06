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
          lang: 'HTML, CSS, Vue.js, vue-cli',
          time: '約20時間',
          img_src: require('../assets/portfolio.png')
        },
        {
          id: 2,
          desc: '福袋特集LPです。カテゴリごとの絞り込みなど含めすべてvueで構築しました。データはjsonファイルを用意しそこから読み込んでます。',
          url: '<a href="https://www.mozo-wondercity.com/lp/2024/fukubukuro/#/" target="_blank">https://www.mozo-wondercity.com/lp/2024/fukubukuro/#/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS, Vue.js, vue-cli',
          time: '約16時間',
          img_src: require('../assets/fukubukuro.png')
        },
        {
          id: 3,
          desc: 'コーポレートサイトのリニューアル案件です。背景に斜線があったりとCSS的に難しいところが多く苦労しました。',
          url: '<a href="https://www.coprosystem.co.jp/" target="_blank">https://www.coprosystem.co.jp/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS(Sass), jQuery',
          time: '約160時間',
          img_src: require('../assets/copro.png')
        },
        {
          id: 4,
          desc: 'イベント・ショップ紹介LPです。ショップ情報の部分はvueを使用してます。',
          url: '<a href="https://www.mozo-wondercity.com/lp/renewal/" target="_blank">https://www.mozo-wondercity.com/lp/renewal/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS, Vue.js',
          time: '約16時間',
          img_src: require('../assets/mozo.png')
        },
        {
          id: 5,
          desc: '製品サイトのリニューアル案件です。製品詳細ページのスライダー部分はslick.jsをカスタマイズして使用してます。タスクランナーはいままでglupを使用していたのですが、この案件ではnpm-scriptsでタスクを処理するという方法をとりました。',
          url: '<a href="https://www.leaffresh.jp/" target="_blank">https://www.leaffresh.jp/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML(ejs), CSS(Sass), jQuery',
          time: '約20時間',
          img_src: require('../assets/leaffresh.png')
        },
        {
          id: 6,
          desc: 'キャンペーンLPです。アニメーション部分はGSAPを使用してます',
          url: '<a href="https://www.mec-markis.jp/mm/store_event/2022/spring/" target="_blank">https://www.mec-markis.jp/mm/store_event/2022/spring/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS, GSAP',
          time: '約8時間',
          img_src: require('../assets/markis.png')
        },
        {
          id: 7,
          desc: 'コーポレートサイトの新規案件です。こちらはアクセシビリティ対応をしてほしいとのことだったので、全ての操作がキーボードで完結するなどアクセシビリティを意識したコーディングを心がけました。',
          url: '<a href="https://www.cet-tyb.com/" target="_blank">https://www.cet-tyb.com/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML(Pug), CSS(Sass), glup, jQuery',
          time: '約80時間',
          img_src: require('../assets/cet.png')
        },
        {
          id: 8,
          desc: 'コーポレートサイトのリニューアル案件です。採用サイトと合わせて30ページ程の規模です。',
          url: '<a href="https://www.tomypure.co.jp/" target="_blank">https://www.tomypure.co.jp/</a>',
          range: 'コーディング（レスポンシブ対応）',
          lang: 'HTML, CSS, jQuery',
          time: '約160時間',
          img_src: require('../assets/tommy.png')
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
