import React from 'react'
import {View, Text, Button,  Image, TextInput, StyleSheet} from 'react-native'

export default class LoginScreen extends React.Component {
    // 对象属性
    // 导航标题栏选项
    static navigationOptions = {
        title: '管理员登录',
        userNameText: '',
        upwdText: ''
    }
    // 对象的构造方法
    constructor() {
        super();
        this.state = {

        }
    }
    // 对象的普通方法
    componentDidMount() {
        
    }

    // handleOnPress = () => {
    //     路由跳转，第一个参数是需要跳转的路由的路径，第二个参数是跳转时需要传递的路由参数
    //     this.props.navigation.navigate('main', {pid: 23, name: 'dingding'})
    // }
    
     // 管理员用户名输入框事件
     handleManagerChangeText = (val) => {
        this.setState({
            userNameText: val
        })
    }
    // 输入密码
    handleupwdChangeText = (val) => {
        this.setState({
            upwdText: val
        })
    }
    // 登录按钮事件
    _onPress = () => {
        let userName = this.state.userNameText
        let upwd = this.state.upwdText
        let body = `uname=${userName}&upwd=${upwd}`
        let loginUrl = 'http://www.codeboy.com/data/user/login.php'
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        }).then( (res) => {
            return res.json()
        }).then( (data) => {
            if (data.code === 200) {
                // 登录成功,跳转到主菜单界面
                this.props.navigation.navigate('main')
            } else {
                // 登录失败
                alert(result.msg)
            }
        }).catch( (err) => {    
            console.log(err)
        })
    }
    render() {
        return (
            <View style={ss.container}>
                <TextInput style={ss.input} 
                value={this.state.userNameText} placeholder='请输入管理员用户名'
                onChangeText={this.handleManagerChangeText}/>
                <TextInput style={ss.input}
                value={this.state.upwdText} 
                onChangeText={this.handleupwdChangeText}
                secureTextEntry={true}
                placeholder='请输入用户登录密码'
                />
                <Button title='登录' onPress={this._onPress}/>
                <View style={ss.box}>
                    <Image source={require('../assets/logo.png')}/>
                    <Text style={ss.manger}>后台管理系统</Text>
                </View>
                <Text style={ss.copyright}>©2017 版权所有 | 个人所有</Text>
            </View>
        )
    }
}

let ss = StyleSheet.create({
    container: {
        padding: 35
    },
    input: {
        borderBottomColor: '#aaa',
        marginBottom: 20,
        borderBottomWidth: 1
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 36
    },
    manger: {
        fontSize: 28,
        color: '#73879c'
    },
    copyright: {
        color: '#73879c',
        textAlign: 'center'
    }
})