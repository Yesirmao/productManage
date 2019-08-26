// 引入第三方路由，react Nation不提供路由模块
import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from './src/components/LoginScreen,';
import MainScreen from './src/components/MainScreen';
import ProdctListScreen from './src/components/ProdctListScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';
// 创建路由词典 --- 栈式导航器
let routes = createStackNavigator({
  //path:'xxx', component:xxx
  // 谁放前面，默认显示第一个路由对应的界面
  login: LoginScreen,  //路由对应的登录模块
  main: MainScreen,    //路由对应的主屏幕模块
  productList: ProdctListScreen, //路由对应的产品列表屏幕
  productDetail: ProductDetailScreen  //路由对应的产品详情屏幕
})
// 创建主组件(自带页头)，在其中注册路由词典
export default createAppContainer(routes) //返回一个带默认标题栏的空白组件