import React, { Component } from 'react';
import { View, WebView } from 'react-native';
export default class Map extends Component {
    render() {
        return (React.createElement(View, { style: { height: '100%', width: '100%' } },
            React.createElement(WebView, { style: { flex: 1 }, source: { uri: 'https://map.baidu.com' } }),
            React.createElement(WebView, { source: { uri: 'https://www.baidu.com' }, style: { flex: 1 } })));
    }
}
//# sourceMappingURL=Map.js.map