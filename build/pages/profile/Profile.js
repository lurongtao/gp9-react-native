var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import { Permissions } from 'expo';
import { Camera } from 'expo';
import { observer, inject } from 'mobx-react';
import { AsyncStorage } from "react-native";
let Profile = class Profile extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        };
    }
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return React.createElement(View, null);
        }
        else if (hasCameraPermission === false) {
            return React.createElement(Text, null, "No access to camera");
        }
        else {
            return (React.createElement(View, null,
                React.createElement(View, { style: {
                        padding: 20,
                        flexDirection: 'row',
                        alignItems: 'center'
                    } },
                    React.createElement(View, null,
                        React.createElement(Text, null, "\u663E\u793A\u5730\u56FE\uFF1A")),
                    React.createElement(Switch, { value: this.props.more.isShowMap, onValueChange: this.changeValue.bind(this) })),
                React.createElement(View, null,
                    React.createElement(Camera, { ref: (ref) => { this.camera = ref; }, style: { flex: 1 }, type: this.state.type },
                        React.createElement(View, { style: {
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            } },
                            React.createElement(TouchableOpacity, { style: {
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }, onPress: () => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                } },
                                React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } },
                                    ' ',
                                    "Flip",
                                    ' ')))))));
        }
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = yield Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasCameraPermission: status === 'granted' });
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                if (this.camera) {
                    let photo = yield this.camera.takePictureAsync();
                }
            }), 2000);
        });
    }
    changeValue(newValue) {
        this.props.more.setShowMap(newValue);
        AsyncStorage.setItem('showMap', newValue.toString());
    }
};
Profile = __decorate([
    inject('store', 'more'),
    observer
], Profile);
export default Profile;
//# sourceMappingURL=Profile.js.map