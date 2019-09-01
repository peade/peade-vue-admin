<template>
  <div class="admin-sidebar">
    <Menu
      default-active="2"
      class="aside-menu"
      @open="handleOpen"
      @close="handleClose"
    >
      <Submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <MenuItemGroup>
          <template slot="title">分组一</template>
          <menu-item index="1-1">选项1</menu-item>
          <menu-item index="1-2">选项1</menu-item>
          <menu-item index="1-3">选项1</menu-item>
          <menu-item index="1-4">选项1</menu-item>
          <menu-item index="1-5">选项1</menu-item>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <MenuItemGroup>
          <template slot="title">分组一</template>
          <menu-item index="2-1">选项1</menu-item>
          <menu-item index="2-2">选项1</menu-item>
          <menu-item index="2-3">选项1</menu-item>
          <menu-item index="2-4">选项1</menu-item>
          <menu-item index="2-5">选项1</menu-item>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <MenuItemGroup>
          <template slot="title">分组一</template>
          <menu-item index="3-1">选项1</menu-item>
          <menu-item index="3-2">选项1</menu-item>
          <menu-item index="3-3">选项1</menu-item>
          <menu-item index="3-4">选项1</menu-item>
          <menu-item index="3-5">选项1</menu-item>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <MenuItemGroup>
          <template slot="title">分组一</template>
          <menu-item index="4-1">选项1</menu-item>
          <menu-item index="4-2">选项1</menu-item>
          <menu-item index="4-3">选项1</menu-item>
          <menu-item index="4-4">选项1</menu-item>
          <menu-item index="4-5">选项1</menu-item>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <MenuItemGroup>
          <template slot="title">分组一</template>
          <menu-item index="5-1">选项1</menu-item>
          <menu-item index="5-2">选项1</menu-item>
          <menu-item index="5-3">选项1</menu-item>
          <menu-item index="5-4">选项1</menu-item>
          <menu-item index="5-5">选项1</menu-item>
        </MenuItemGroup>
      </Submenu>
      <Submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <MenuItemGroup>
          <template slot="title">分组一</template>
          <menu-item index="6-1">选项1</menu-item>
          <menu-item index="6-2">选项1</menu-item>
          <menu-item index="6-3">选项1</menu-item>
          <menu-item index="6-4">选项1</menu-item>
          <menu-item index="6-5">选项1</menu-item>
        </MenuItemGroup>
      </Submenu>
    </Menu>
  </div>

</template>

<script>
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
  .aside-menu{
    min-height: 100%;
  }
</style>