import Mock from 'mockjs'

let mock = function () {
  Mock.setup({timeout: '200-600'})
  Mock.mock('/login', 'post', function (options) {
    console.log(options)
    return options
  })
  Mock.mock(/\/urlList\??[^?]*/, 'get',[{
    name: 'html',
    icon: 'el-icon-postcard',
    url: '#/html',
    child: [
      {
        name: 'address',
        icon: 'el-icon-location',
        url: '/html/address'
      }
    ]
  }])
}

export default mock