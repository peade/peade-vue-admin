module.exports = {
    devServer: {
        open: true,
        host: '0.0.0.0',
        useLocalIp: true,
        port: 3700
        // 由于本项目数据通过easy-mock和mockjs模拟，不存在跨域问题，无需配置代理;
        // proxy: {
        //   '/v2': {
        //       target: target,
        //       changeOrigin: true
        //   }
        // }
    },
}