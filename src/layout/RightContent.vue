<template>
  <div class="right-body">
    <top-info/>
    <div class="body-content">
      <router-view></router-view>
    </div>
    <bottom-foot/>
  </div>
</template>

<script>
  import TopInfo from './TopInfo'
  import BottomFoot from './BottomFoot'

  export default {
    name: 'RightContent',
    mixins: [],

    components: {
      TopInfo,
      BottomFoot
    },

    props: {},

    data() {
      return {}
    },

    computed: {},

    watch: {},

    created() {
    },

    mounted() {
    },

    destroyed() {
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../styles/mixin";

  .right-body {
    position: relative;
    height: 100%;
    flex: 1 1 10%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    @include scrollbar;

    .body-content {
      flex: 1 1 20%;
      margin-top: 50px;
    }
  }
</style>