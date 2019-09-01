<template>
  <div class="body">
    <left-menu/>
    <right-content/>
  </div>
</template>

<script>
  // imort {scrollbar} from 'element-ui'
  import LeftMenu from './LeftMenu'
  import RightContent from './RightContent'
  // import LeftNav from './LeftNav'
  export default {
    name: 'layout',
    components: {
      LeftMenu,
      RightContent
      // LeftNav
    },
    data() {
      return {
        a: 1,
        b: 2
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/mixin";

  .body {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .left, .right {
    height: 100%;
    overflow-y: auto;
  }

  .left {
    min-width: 200px;
    flex-grow: 0;
    flex-shrink: 0;
  }


  .right {

    /*border: 1px solid red;*/

  }
</style>