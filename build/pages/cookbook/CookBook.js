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
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import Swiper from 'react-native-swiper';
import List from '../../components/list/List';
import http from '../../utils/fetch';
import styles from './styles';
let CookBook = class CookBook extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hotCateList: []
        };
    }
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: styles.swiperWrapper },
                React.createElement(Swiper, { autoplay: true, showsPagination: false }, this.props.store.list.slice(0, 5).map((value) => {
                    return (React.createElement(View, { style: styles.swiperSlide, key: value.id },
                        React.createElement(Image, { source: { uri: value.img }, style: { width: '100%', height: '100%' } })));
                }))),
            React.createElement(View, { style: styles.hotCateContainer },
                this.state.hotCateList.slice(0, 11).map((v, i) => {
                    return (React.createElement(View, { key: i, style: styles.hotCateItem },
                        React.createElement(TouchableOpacity, { onPress: this._onPressHotCate.bind(this, i) },
                            React.createElement(View, { style: styles.hotCateImgWrap },
                                React.createElement(Image, { source: { uri: v.img }, style: styles.hotCateImg })),
                            React.createElement(View, { style: styles.hotCateTextWrap },
                                React.createElement(Text, { style: styles.hotCateText }, v.title)))));
                }),
                React.createElement(View, { style: styles.hotCateLastItem },
                    React.createElement(View, { style: styles.hotCateTextWrap },
                        React.createElement(Text, { style: styles.hotCateText }, "\u66F4\u591A...")))),
            React.createElement(List, { start: 0, count: 10 })));
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let result2 = yield http({
                url: 'https://api.myjson.com/bins/1cywbw'
            });
            this.setState({
                hotCateList: result2.data
            });
        });
    }
    _onPressHotCate(i) {
        this.props.navigation.navigate('HotList', { i });
    }
};
CookBook = __decorate([
    inject('store'),
    observer
], CookBook);
export default CookBook;
//# sourceMappingURL=CookBook.js.map