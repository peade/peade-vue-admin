<template>
    <div class="right-body">
        <header class="top-info">

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
    .right-body {
        position: relative;
        flex: 1 1 10%;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        .top-info {
            position: fixed;
            height: 50px;
            width: 100%;
            right: 0;
            top: 0;
            border-bottom: 1px solid green;
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