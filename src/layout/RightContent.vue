<template>
  <div class="right-body">
    <header class="top-info">
      <div>Admin</div>
      <div><span class="el-icon-user"></span></div>
    </header>
    <section class="body-content">
      <router-view></router-view>
    </section>
    <footer class="body-foot">
      来自xxx的项目
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'RightContent',
    mixins: [],

    components: {},

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

    .top-info {
      position: absolute;
      height: 50px;
      width: 100%;
      right: 0;
      top: 0;
      padding: 0 10px;
      background-color: #fff;
      z-index: 2;
      border-bottom: 1px solid green;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .body-content {
      flex: 1 0 2000px;
      margin-top: 50px;
    }

    .body-foot {
      flex: 0 0 0;
      text-align: center;
      line-height: 50px;
    }

  }
</style>