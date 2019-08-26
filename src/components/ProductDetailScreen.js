import React from 'react'
import {View, Text, ScrollView, Button, StyleSheet} from 'react-native'
import MySlices from './mySlices'
import MyProductDetail from './MyProductDetail'

export default class ProductDetailScreen extends React.Component {
    // 产品详情url
    static productDetailUrl = 'http://www.codeboy.com/data/product/details.php?lid='
    // 对象属性
    // 导航标题栏选项
    static navigationOptions = {
        title: '产品详情'
    }
    // 对象的构造方法
    constructor() {
        super();
        this.state = {
            product: {}  //要绑定的产品的数据
        }
    }
    // 对象的普通方法
    componentDidMount() {
        let pid = this.props.navigation.getParam('pid')
        // 发起异步请求，获取商品数据
        let url = ProductDetailScreen.productDetailUrl + pid
        fetch(url).then( (res) => {
            return res.json()
        }).then( (result) => {
            this.setState({
                product: result.details
            })
        }).catch( (err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <View style={{flex: 1, padding: 10}}>
                <ScrollView>
                    <Text style={ss.xinghao}>商品型号：{this.state.product.lname}</Text>
                    <View style={ss.hr}></View>
                    <MySlices picList={this.state.product.picList}/>
                    <Text style={ss.title}>{this.state.product.title}</Text>
                    <Text style={ss.xinghao}>{this.state.product.subtitle}</Text>
                    <Text style={ss.price}>单价：{this.state.product.price}</Text>
                    <View style={ss.hr}></View>
                    {/* 由于服务器端获得的商品详情是一段html标签片段，而RN不认识html，因此不能渲染出html的效果
                    解决方案：将html标签替换成RN认识的View  Text标签等 */}
                    <MyProductDetail content={this.state.product.details}/>
                </ScrollView>
                <Button title='删除产品'/>
            </View>
        )
    }
}

let ss = StyleSheet.create({
    hr: {
        backgroundColor: '#888',
        height: 1,
        marginVertical: 10
    },
    xinghao: {
        color: '#aaa'
    },
    title: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e31607',
        marginTop: 10
    }
})