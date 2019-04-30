import React, { Component } from 'react'
import { Text, View, Switch, TouchableOpacity } from 'react-native'

import { Permissions } from 'expo'

import { Camera } from 'expo'

import { observer, inject } from 'mobx-react'

import { AsyncStorage } from "react-native"

interface Props {
  store?: any,
  more?: any
}

interface State {
  hasCameraPermission: any,
  type: string,
}

@inject('store', 'more')
@observer
export default class Profile extends Component<Props, State> {
  camera: any

  state: State = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  }

  render() {
    const { hasCameraPermission } = this.state

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View>
          <View style={{
            padding: 20, 
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <View>
              <Text>显示地图：</Text>
            </View>
            <Switch
              value={this.props.more.isShowMap}
              onValueChange={this.changeValue.bind(this)}
            />
          </View>

          <View>
            <Camera
              ref={(ref: any) => { this.camera = ref }}
              style={{ flex: 1 }} 
              type={this.state.type}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        </View>
      )
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    setTimeout( async () => {
      if (this.camera) {
        let photo = await this.camera.takePictureAsync()
      }
    }, 2000)
  }

  changeValue(newValue: boolean) {
    this.props.more.setShowMap(newValue)
    AsyncStorage.setItem('showMap', newValue.toString())
  }
}