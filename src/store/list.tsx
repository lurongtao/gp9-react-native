import { observable, action } from 'mobx'

import http from '../utils/fetch'

class Store {
  @observable
  list: Array<Object> = []

  @action
  async setList() {
    let result = await http({ url: 'https://api.myjson.com/bins/yhum4' })
    this.list = result.data
  }

  @action
  async getRefreshData() {
    let result = await http({ url: 'https://api.myjson.com/bins/iqxnw' })
    let newResult = result.data.map((value: any) => {
      let {
        id,
        ...rest
      } = value
      return {
        id: new Date().getTime().toString(),
        ...rest
      }
    })
    this.list = [...newResult, ...this.list]
  }
}

export default new Store()