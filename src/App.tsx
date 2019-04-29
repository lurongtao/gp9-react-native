import React from 'react'

import Home from './pages/home/Home'
import HotList from './pages/hotlist/HotList'

import { Provider } from 'mobx-react'
import store from './store/'

import { 
  createStackNavigator, 
  createAppContainer
} from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home,
    HotList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: '美食大全',
      headerStyle: {
        backgroundColor: '#ee7530',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

let Nav = createAppContainer(AppNavigator)

export default () => (
  <Provider store={store}>
    <Nav></Nav>
  </Provider>
)