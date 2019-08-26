import React from 'react'
import {View, Image, Text, Dimensions } from 'react-native'
import MyImage from './MyImage';

export default class MyProductDetail extends React.Component {
    static serverUrl = 'http://www.codeboy.com/'
    constructor() {
        super()
        this.state = {
            details: {}
        }
    }

    componentDidMount() {

    }

    render() {
        if (this.props.content) {
            // content属性已经获得了服务器端的数据。由于图片是后台通过富文本编辑器存储在数据库中的，因此数据库中返回的数据都是一段html文本
            // 而React Native不认识html文本，因此我们需要将文本转化成React Native可识别的内容。因此通过正则表达式将需要的内容提取出来，再
            // 使用原生App的标签将内容渲染出来。
            // 方案二：在RN应用中嵌入一个HTML/CSS解释器(就是浏览器的核心)组件——WebView组件。因为浏览器核心组件体积过大，RN官方已经删除此组件！
            // 如果实在需要可以使用第三方组件，例如react-native-community/react-native-webview
            let arr = this.props.content.match(/img\/\S*\.jpg/g)
            return (
                <View>
                    {
                        arr.map( (url, index) => {
                            return <MyImage picUri={MyProductDetail.serverUrl+url} key={index}/>
                        })
                    }
                </View>
            )
        } else {
            return (
                <View>
                    <Text>商品加载完成中....</Text>
                </View>
            )
        }
    }
}