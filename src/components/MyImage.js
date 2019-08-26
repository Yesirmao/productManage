// 动态获取详情图片的宽高,由于图片的内容我们是从后端获取的，因此我们不能知道获取到的图片的具体的宽高
// 因此，我们需要动态获取图片的宽高。通过ReactNative官方文档提供的Image.getSize()方法异步的获取图片的宽高
import React from 'react'
import {Image, Dimensions} from 'react-native'

export default class MyImage extends React.Component {
    
    constructor() {
        super()
        this.state = {
            originalWidth: 0,     //设置图片原始宽度
            originalHeight: 0,     //设置图片原始高度
            displayWidth: Dimensions.get('window').width-10,    //图片最后待显示的宽度
            displayHeight: 0        //图片待显示的高度，需要计算得来
        }
    }

    componentDidMount() {
        // Image.getSize(url, (w, h) => { w就是远程图片的宽，h就是远程图片的高
        // 但是请求是异步的，用模型变量，将宽和高保存到状态中，然后赋值给style
        // 组件加载完成后，异步获取图片的原始尺寸
        Image.getSize(this.props.picUri, (w, h) => {
            let originalWidth = w
            let originalHeight = h
            let displayWidth = this.state.displayWidth
            let displayHeight = displayWidth/originalWidth*originalHeight
            // 异步获取到数据后，保存会状态数据，就会重新出发渲染
            this.setState({
                originalWidth,
                originalHeight,
                displayWidth,
                displayHeight
            })
        })
    }

    render() {
        return (
            <Image style={{width:this.state.displayWidth, height: this.state.displayHeight}}
            resizeMode='stretch' source={{uri: this.props.picUri}}/>
        ) 
    }
}