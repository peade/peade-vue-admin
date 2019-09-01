import axios from 'axios'

export default {
  get(param) {
    return new Promise((resolve, reject) => {
      axios.get(param.url, {
        params: param.params
      })
    })

  }
}