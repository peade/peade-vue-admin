import axios from 'axios'

export default {
  get(param) {
    return new Promise((resolve, reject) => {
      axios.get('FFF' + param.url, {
        params: param.params
      })
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err.message)
        })
    })

  }
}