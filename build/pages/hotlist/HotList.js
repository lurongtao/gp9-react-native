import React, { Component } from 'react';
import List from '../../components/list/List';
export default class HotList extends Component {
    render() {
        return (React.createElement(List, { start: 0, count: 10 }));
    }
}
HotList.navigationOptions = {
    title: '热点美食'
};
//# sourceMappingURL=HotList.js.map