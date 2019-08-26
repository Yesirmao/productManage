// 我的轮播广告
import React from 'react'
import {View, Image, StyleSheet, Dimensions} from 'react-native'

export default class MySlices extends React.Component {
    // 轮播广告的定时器
    timer = null
    static serverUrl = 'http://www.codeboy.com/'
    constructor() {
        super()
        this.state = {
            curIndex: 0,  //图片数组中当前显示的图片下标
        }
    }

    componentWillUnmount() {
        // 组件被卸载时触发
        // 如果定时器还存在，当卸载时，清除定时器
        if (this.timer) {
            clearTimeout(this.timer)
        }
    }

    render() {
        if (this.props.picList) {
            // 服务器端返回数据，父组件已经把图片列表传给当前轮播组件
            // 启动定时器，开会时轮播：启动定时器---只启动一次
            if (this.timer === null) {
                this.timer = setTimeout( () => {
                    // 修改要显示图片的下标
                    let i = this.state.curIndex
                    i++
                    if (i >= this.props.picList.length) {
                        i = 0  //轮播到最后一张后，返回第一张
                    }
                    this.setState({
                        curIndex: i
                    })
                }, 1000)
            }
            return (
                <Image style={ss.fullWidth} resizeMode='stretch' 
                source={{uri: MySlices.serverUrl + this.props.picList[this.state.curIndex].md}}/>
            )
        }else{
            return (
                <Image style={ss.fullWidth} resizeMode='stretch' source={require('../assets/loading.jpg')}/>
            )
        }
    }
}
let ss = StyleSheet.create({
    // 屏幕的宽度：Dimensions.get('screen').width
    // 屏幕的高度：Dimensions.get('screen').height
    // 窗口的宽度：Dimensions.get('window').width
    // 窗口的高度: Dimensions.get('window').height
    fullWidth: {  //宽和高都是窗口宽度的组件
        width: Dimensions.get('window').width-10,
        height: Dimensions.get('window').width-10
    }
})