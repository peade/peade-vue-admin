<template>
  <header class="top-info">
    <div><i class="el-icon-s-unfold"></i></div>
    <div>
      <span class="el-icon-user-solid"></span><span>peade Admin</span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'TopInfo',
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

</style>