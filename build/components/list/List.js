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
import React from 'react';
import { inject, observer } from 'mobx-react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';
let List = class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefresh: false
        };
    }
    render() {
        let { start, count } = this.props;
        let data = this.props.store.list.list.slice(start, count);
        return (React.createElement(View, { style: styles.better }, React.createElement(FlatList, { data: data, numColumns: 2, refreshing: this.state.isRefresh, onRefresh: this.handleRefresh.bind(this), columnWrapperStyle: styles.betterWrapper, keyExtractor: (item, index) => item.id, renderItem: ({ item, index }) => {
                return (React.createElement(View, { style: { paddingRight: 10, width: '50%' } },
                    React.createElement(View, { style: styles.betterImgWrapper },
                        React.createElement(Image, { resizeMode: 'cover', style: { height: '100%' }, source: { uri: item.img } })),
                    React.createElement(View, { style: styles.betterTitle },
                        React.createElement(Text, { style: { fontSize: 18 } }, item.name)),
                    React.createElement(View, { style: styles.betterHot },
                        React.createElement(Text, { style: { color: '#777777' } },
                            item.all_click,
                            "\u6D4F\u89C8 ",
                            item.favorites,
                            "\u6536\u85CF"))));
            } })));
    }
    handleRefresh() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({
                isRefresh: true
            });
            yield this.props.store.list.getRefreshData();
            this.setState({
                isRefresh: false
            });
        });
    }
};
List = __decorate([
    inject('store'),
    observer
], List);
export default List;
//# sourceMappingURL=List.js.map