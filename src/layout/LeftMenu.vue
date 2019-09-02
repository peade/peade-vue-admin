<template>
  <div class="admin-sidebar">
    <Menu
      default-active="2"
      class="aside-menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <Submenu :index="JSON.stringify(item)" v-for="item in list" :key="JSON.stringify(item)">
        <template slot="title">
          <i :class="item.icon"></i><span>{{item.name}}</span>
        </template>
        <menu-item-group>
          <template slot="title">title</template>
          <menu-item :index="JSON.stringify(child)" v-for="child in item.child" :key="JSON.stringify(child)">
            <i :class="child.icon"></i>
            <router-link :to="child.url">{{child.name}}</router-link>
          </menu-item>
        </menu-item-group>

      </Submenu>
    </Menu>

  </div>

</template>

<script>
  import ajax from '../util/ajax'
  import {Menu, MenuItem, MenuItemGroup, Submenu} from 'element-ui'

  export default {
    name: 'leftMenu',
    mixins: [],

    components: {
      Menu,
      MenuItem,
      MenuItemGroup,
      Submenu
    },

    props: {},

    data() {
      return {
        list: []
      }
    },

    computed: {},

    watch: {},

    created() {
    },

    async mounted() {
      console.log(this)
      try {
        this.list = await ajax.get({
          url: '/urlList???',
          params: {
            token: 'logined'
          }
        })
      } catch (err) {
        this.$message(err)
        // Message(err)
      }
    },

    destroyed() {
    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/mixin";

  .admin-sidebar {
    height: 100%;
    overflow-y: auto;
    min-width: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    @include scrollbar;
  }

  .aside-menu {
    min-height: 100%;
    /*padding-top: 50px;*/
  }
</style>