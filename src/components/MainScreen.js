import React from 'react'
import {View, Text, Button, TouchableOpacity, Image, ScrollView,
    StyleSheet} from 'react-native'

export default class MainScreen extends React.Component {
    // 对象属性
    // 导航标题栏选项
    static navigationOptions = {
        title: '主菜单',    //顶部导航栏主菜单
        headerRight: (      //顶部导航栏右侧头像
            <TouchableOpacity>
                <Image source={require('../assets/user.png')}
                style={{width:36, height:36, borderRadius: 18}}>
                {/* borderRadius: 半径倒角，不能用百分比，否则报错，只能用数字 */}
                </Image>
            </TouchableOpacity>
        )     
    }
    // 对象的构造方法
    constructor() {
        super();
        this.state = {
            
        }
    }
    // 对象的普通方法
    // componentDidMount() {
        // 获取路由传参的参数
    //     let pid = this.props.navigation.getParam('pid');
    //     let uname = this.props.navigation.getParam('name');
    //     let age = this.props.navigation.getParam('age', 20)
    //     console.log(pid, uname, age)
    // }

    render() {
        return (
            <ScrollView>
                {/* 统计相关的组件 */}
                <View>
                    <View style={ss.row}>
                        <View style={[ss.col, ss.bordertopw]}>
                            <Text style={ss.desc}>上架商品总数</Text>
                            <Text style={ss.number}>24,380</Text>
                            <Text style={[ss.desc, ss.ins]}>+128%较上月</Text>
                        </View>
                        <View style={[ss.col, ss.bordertopw]}>
                            <Text style={ss.desc}>注册用户总数</Text>
                            <Text style={ss.number}>1,965</Text>
                            <Text style={[ss.desc, ss.ins]}>+50%较上月</Text>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={ss.desc}>上架商品总数</Text>
                            <Text style={ss.number}>24,380</Text>
                            <Text style={[ss.desc, ss.ins]}>+128%较上月</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={ss.desc}>当日PC端PV量</Text>
                            <Text style={ss.pv}>14,281</Text>
                            <Text style={[ss.desc, ss.ins]}>-50%较上月</Text>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={ss.desc}>移动端PV量</Text>
                            <Text style={ss.pv}>29,315</Text>
                            <Text style={[ss.desc, ss.ins]}>-34%较昨日</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={ss.desc}>APP下载量</Text>
                            <Text style={ss.number}>7,422</Text>
                            <Text style={[ss.desc, ss.ins]}>+18%较上周</Text>
                        </View>
                    </View>
                </View>
                {/* 菜单相关的组件 */}
                <View style={{marginTop: 50}}>
                    <View style={ss.row}>
                        <View style={[ss.col, ss.bordertopw]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('productList')}>
                                <Image source={require('../assets/menu_product.jpg')}/>
                                <Text style={ss.texta}>商品管理</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[ss.col, ss.bordertopw]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('productList')}>
                                <Image source={require('../assets/menu_user.jpg')}/>
                                <Text style={ss.texta}>用户管理</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={[ss.col, {borderWidth: 0}]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('productList')}>
                                <Image source={require('../assets/menu_order.jpg')}/>
                                <Text style={ss.texta}>订单管理</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[ss.col, {borderWidth: 0}]}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('productList')}>
                                <Image source={require('../assets/menu_refresh.jpg')}/>
                                <Text style={ss.texta}>首页管理</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

}
let ss = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    col: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        borderColor: '#888',
        borderLeftWidth: 1,
        borderBottomWidth: 1
    },
    desc: {
        color: '#9e9e9e'
    },
    number: {
        color: '#009688',
        fontSize: 24
    },
    pv: {
        color: '#e31607',
        fontSize: 24
    },
    ins: {
        fontSize: 12,
    },
    bordertopw: {
        borderTopWidth: 1,
        borderColor: '#888'
    },
    texta: {
        textAlign: 'center'
    }
})