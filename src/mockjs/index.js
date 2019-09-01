import Mock from 'mockjs'

let mock = function () {
  Mock.setup({timeout: '200-600'})
  Mock.mock('/login', 'post', function (options) {
    console.log(options)
    return options
  })
}

export default mock