import React from 'react'
import {View, Text, FlatList, Image, Button, ActivityIndicator} from 'react-native'

export default class ProdctListScreen extends React.Component {
    static serverUrl = 'http://www.codeboy.com/'
    static porductListUrl = 'http://www.codeboy.com/data/product/list.php?pno='
    pno = 0 //即将要加载的页号
    // 对象属性
    // 导航标题栏选项
    static navigationOptions = {
        title: '产品列表'
    }
    // 对象的构造方法
    constructor() {
        super();
        this.state = {
            plist: [] //商品数组
        }
    }
    componentDidMount() {
        // 当组件加载完成，异步请求服务器端商品列表数据
        fetch(ProdctListScreen.porductListUrl).then( (res) => {
            return res.json()
        }).then( (result) => {
            this.setState({
                plist: result.data
            })
        }).catch( (err) => {
            console.log(err)
        })
    }

    // 设置FlatList的key值，因为key值不能为数字，则在后面拼接一个字符串
    _keyExtractor = (item, index) => index+''

    // 当组件下滑到尾部时
    _onEndReached = () => {
        // 异步请求更多产品的数据
        this.pno++;
        fetch(ProdctListScreen.porductListUrl+this.pno).then( (res) => {
            return res.json()
        }).then( (data) => {
            // 将重新加载后的数据拼接到新的plist中
            let plist = this.state.plist.concat(data.data)
            this.setState({
                plist
            })
        }).catch( (err) => {
            console.log(err)
        })
    }
    // 点击详情按钮跳转到产品详情页面
    // _onPress = (val) => {
    //     console.log(val)
    //     this.props.navigation.navigate('productDetail', {'pid': val})
    // }

    _renderItem = (data) => { //渲染出一个列表项
        return (
            <View style={{flexDirection:'row',padding:10,alignItems:'center'}}>
                {/* 网络图片，在加载时需要指定宽和高，然后设置图片的重置尺寸的类型。因为不指定宽高，则
                图片在加载完成后，因为我们不知道网络图片的大小，会发生重绘。而加载本地的图片，可以不指定宽高
                ，由于本地图片，在读取过程中，手机屏幕会读取图片的宽高，因此可以不指定宽高，屏幕也不会发生重绘 */}
                <Image source={{uri: ProdctListScreen.serverUrl + data.item.pic}} style={{width: 80,height: 80}}
                resizeMode='stretch'/>
                <View style={{flex: 1}}>
                    <Text numberOfLines={2} ellipsizeMode='tail'>{data.item.title}</Text>
                    <Text style={{color: '#f00', fontWeight: 'bold', fontSize: 18}}>单价：{data.item.price}</Text>
                </View>
                <Button title='查看详情' 
                onPress={()=>{this.props.navigation.navigate('productDetail', {pid: data.item.lid})}}/>
                {/*onPress={this._onPress(data.item.lid)}*/}
            </View>
        )
    }

    // 添加底部活动指示器 
    _listFooter(){
        return (
          <View>
            <ActivityIndicator size="large" animating={true}></ActivityIndicator>
            <Text>加载中请稍候...</Text>
          </View>
        )
      }

    // 对象的普通方法
    render() {
        return (
            <FlatList data={this.state.plist} renderItem={this._renderItem} keyExtractor={this._keyExtractor}
            onEndReached={this._onEndReached} ListFooterComponent={this._listFooter}>
                {/* onEndReached：当滚动条滚动到底部 
                    onEndReachedThreshold：当距离内容最底部还有多远时触发onEndReached回调，值为小数，表示百分比 
                    需完成：尾部添加活动指示器，当页面加载完成时，提示页面已无更多数据加载*/}
            </FlatList>
        )
    }
}
