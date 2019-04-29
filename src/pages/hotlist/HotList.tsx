import React, { Component } from 'react'
import { Text, View } from 'react-native'

import List from '../../components/list/List'

export default class HotList extends Component {
  static navigationOptions = {
    title: '热点美食'
  }

  render() {
    return (
      <List start={0} count={10}></List>
    )
  }
}