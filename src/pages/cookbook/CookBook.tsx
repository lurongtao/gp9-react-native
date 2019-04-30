import React, { Component } from 'react'
import { 
  Text, 
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'

import { observer, inject } from 'mobx-react'

import Swiper from 'react-native-swiper'
import List from '../../components/list/List'

import http from '../../utils/fetch'

import styles from './styles'

interface Props {
  store?: any
  navigation?: any
}

interface State {
  hotCateList: Array<any>
}

@inject('store')
@observer
export default class CookBook extends Component<Props, State> {
  state: State = {
    hotCateList: []
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.swiperWrapper}>
          <Swiper 
            autoplay={true}
            showsPagination={false}
          >
            {
              this.props.store.list.list.slice(0, 5).map((value: any) => {
                return (
                  <View style={styles.swiperSlide} key={value.id}>
                    <Image source={{uri: value.img}} style={{width: '100%', height: '100%'}}></Image>
                  </View>
                )
              })
            }
          </Swiper>
        </View>
        <View style={styles.hotCateContainer}>
        {
          this.state.hotCateList.slice(0, 11).map((v, i) => {
            return (
              <View key={i} style={styles.hotCateItem}>
                <TouchableOpacity onPress={this._onPressHotCate.bind(this, i)}>
                  <View style={styles.hotCateImgWrap}>
                    <Image source={{uri: v.img}} style={styles.hotCateImg}></Image>
                  </View>
                  <View style={styles.hotCateTextWrap}>
                    <Text style={styles.hotCateText}>{v.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
          <View style={styles.hotCateLastItem}>
            <View style={styles.hotCateTextWrap}>
              <Text style={styles.hotCateText}>更多...</Text>
            </View>
          </View>
        </View>
        <List start={0} count={10}></List>
      </ScrollView>
    )
  }

  async componentDidMount() {
    let result2 = await http({
      url: 'https://api.myjson.com/bins/1cywbw'
    })
    this.setState({
      hotCateList: result2.data
    })
  }

  _onPressHotCate(i: string) {
    this.props.navigation.navigate('HotList', {id: i})
  }
}