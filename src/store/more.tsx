import { observable, action } from 'mobx'

class Store {
  @observable
  isShowMap: boolean = false

  @action
  async setShowMap(newValue: boolean) {
    this.isShowMap = newValue
  }
}

export default new Store()