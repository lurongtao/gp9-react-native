import React from 'react'
import {
  Image
} from 'react-native'

import { observer, inject } from 'mobx-react'

import TabNavigator from 'react-native-tab-navigator'

import CookBook from '../cookbook/CookBook'
import HotList from '../hotlist/HotList'
import Map from '../map/Map'
import Profile from '../profile/Profile'

import styles from './styles'

interface Props {
  name?: string,
  navigation?: any,
  store?: any
}

interface State {
  selectedTab: string
}

const cookBook = require('../../../assets/images/cookbook.png')
const cookBookActive = require('../../../assets/images/cookbook-active.png')
const menu = require('../../../assets/images/menu.png')
const menuActive = require('../../../assets/images/menu-active.png')
const location = require('../../../assets/images/location.png')
const locationActive = require('../../../assets/images/location-active.png')
const more = require('../../../assets/images/more.png')
const moreActive = require('../../../assets/images/more-active.png')

@inject('store')
@observer
class Home extends React.Component<Props, State> {
  state: State = {
    selectedTab: 'home'
  }

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="美食大全"
          renderIcon={() => <Image source={cookBook} style={styles.imgSize} />}
          renderSelectedIcon={() => <Image source={cookBookActive} style={styles.imgSize} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {<CookBook></CookBook>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'hotlist'}
          title="热点美食"
          renderIcon={() => <Image source={menu} style={styles.imgSize} />}
          renderSelectedIcon={() => <Image source={menuActive} style={styles.imgSize} />}
          onPress={
            () => {
              this.props.navigation.navigate('HotList')
            }
          }>
          {<HotList></HotList>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="美食地图"
          renderIcon={() => <Image source={location} style={styles.imgSize} />}
          renderSelectedIcon={() => <Image source={locationActive} style={styles.imgSize} />}
          onPress={() => this.setState({ selectedTab: 'map' })}>
          {<Map></Map>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="更多"
          renderIcon={() => <Image source={more} style={styles.imgSize} />}
          renderSelectedIcon={() => <Image source={moreActive} style={styles.imgSize} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {<Profile></Profile>}
        </TabNavigator.Item>
      </TabNavigator>
    )
  }

  componentDidMount() {
    this.props.store.setList()
  }
}

export default Home