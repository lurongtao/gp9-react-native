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
import React, { Fragment } from 'react';
import { Image, View, Text, AsyncStorage } from 'react-native';
import { observer, inject } from 'mobx-react';
import TabNavigator from 'react-native-tab-navigator';
import CookBook from '../cookbook/CookBook';
import HotList from '../hotlist/HotList';
import Map from '../map/Map';
import Profile from '../profile/Profile';
import styles from './styles';
const cookBook = require('../../../assets/images/cookbook.png');
const cookBookActive = require('../../../assets/images/cookbook-active.png');
const menu = require('../../../assets/images/menu.png');
const menuActive = require('../../../assets/images/menu-active.png');
const location = require('../../../assets/images/location.png');
const locationActive = require('../../../assets/images/location-active.png');
const more = require('../../../assets/images/more.png');
const moreActive = require('../../../assets/images/more-active.png');
let Home = class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            isShowMap: false
        };
    }
    render() {
        return (React.createElement(Fragment, null,
            React.createElement(TabNavigator, null,
                React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'home', title: "\u7F8E\u98DF\u5927\u5168", renderIcon: () => React.createElement(Image, { source: cookBook, style: styles.imgSize }), renderSelectedIcon: () => React.createElement(Image, { source: cookBookActive, style: styles.imgSize }), onPress: () => this.setState({ selectedTab: 'home' }) }, React.createElement(CookBook, { navigation: this.props.navigation })),
                React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'hotlist', title: "\u70ED\u70B9\u7F8E\u98DF", renderIcon: () => React.createElement(Image, { source: menu, style: styles.imgSize }), renderSelectedIcon: () => React.createElement(Image, { source: menuActive, style: styles.imgSize }), onPress: () => {
                        this.props.navigation.navigate('HotList');
                    } }, React.createElement(HotList, null)),
                this.state.isShowMap && (React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'map', title: "\u7F8E\u98DF\u5730\u56FE", renderIcon: () => React.createElement(Image, { source: location, style: styles.imgSize }), renderSelectedIcon: () => React.createElement(Image, { source: locationActive, style: styles.imgSize }), onPress: () => this.setState({ selectedTab: 'map' }) }, React.createElement(Map, null))),
                React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'profile', title: "\u66F4\u591A", renderIcon: () => React.createElement(Image, { source: more, style: styles.imgSize }), renderSelectedIcon: () => React.createElement(Image, { source: moreActive, style: styles.imgSize }), onPress: () => this.setState({ selectedTab: 'profile' }) }, React.createElement(Profile, null))),
            React.createElement(View, { style: { display: 'none' } },
                React.createElement(Text, null, 'test' + this.props.more.isShowMap.toString()))));
    }
    componentWillReact() {
        this.setState({
            isShowMap: this.props.more.isShowMap
        });
    }
    changeType(value) {
        return JSON.parse(value);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.props.store.list.setList();
            const value = yield AsyncStorage.getItem('showMap');
            let convertedValue = this.changeType(value);
            this.props.more.setShowMap(convertedValue);
            this.setState({
                isShowMap: convertedValue
            });
        });
    }
    componentWillUnMount() {
    }
};
Home = __decorate([
    inject('store', 'more'),
    observer
], Home);
export default Home;
//# sourceMappingURL=Home.js.map