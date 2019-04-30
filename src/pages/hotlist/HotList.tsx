import React, { Component } from 'react'
import { Text, View } from 'react-native'

import List from '../../components/list/List'

interface Props {
  navigation?: any
}

export default class HotList extends Component<Props> {
  static navigationOptions = {
    title: '热点美食'
  }

  render() {
    const itemId = this.props.navigation.getParam('id', 0)
    alert(itemId)
    return (
      <List start={0} count={10}></List>
    )
  }
}