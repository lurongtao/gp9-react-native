import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  View, Text, ScrollView, FlatList, Image
} from 'react-native'

import styles from './styles'

interface Props {
  store?: any
  start?: number
  count?: number
}

interface State {
  isRefresh: boolean
}

@inject('store')
@observer
export default class List extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      isRefresh: false
    }
  }
  render () {
    let {start, count} = this.props
    let data = this.props.store.list.list.slice(start, count)
    return (
      <View style={styles.better}>
        {
          <FlatList
            data={data}
            numColumns={2}
            refreshing={this.state.isRefresh}
            onRefresh={this.handleRefresh.bind(this)}
            columnWrapperStyle={styles.betterWrapper}
            keyExtractor={(item: {id: string, [prop: string]: any}, index: number) => item.id}
            renderItem={({item,index}: any) => {
                return (
                  <View style={{paddingRight: 10, width: '50%'}}>
                    <View style={styles.betterImgWrapper}>
                      <Image resizeMode={'cover'} style={{height: '100%'}} source={{uri: item.img}}></Image>
                    </View>
                    <View style={styles.betterTitle}><Text style={{fontSize: 18}}>{item.name}</Text></View>
                    <View style={styles.betterHot}><Text style={{color: '#777777'}}>{item.all_click}浏览 {item.favorites}收藏</Text></View>
                  </View>
                )
              }
            }
          >
          </FlatList>
        }
      </View>
    )
  }

  async handleRefresh () {
    this.setState({
      isRefresh: true
    })
    await this.props.store.list.getRefreshData()
    this.setState({
      isRefresh: false
    })
  }
}