import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'

export default class Map extends Component {
  render() {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <WebView
          style={{flex: 1}}
          source={{uri: 'https://map.baidu.com'}}
        />
        <WebView
          source={{uri: 'https://www.baidu.com'}}
          style={{flex: 1}}
        />
      </View>
    )
  }
}