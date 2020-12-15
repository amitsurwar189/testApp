import React from 'react';
import {Easing, Animated} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../container/Home';
import Profile from '../container/Profile';
import Post from '../container/Post';
import DrawerContainer from '../container/DrawerContainer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image, View, Text} from 'react-native';

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    // transitionConfig,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const BrowseStack = createStackNavigator(
  {
    Profile: Profile,
  },
  {
    initialRouteName: 'Profile',
    // transitionConfig,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AddPostStack = createStackNavigator(
  {
    Post: Post,
  },
  {
    initialRouteName: 'Post',
    // transitionConfig,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const businessTab = createBottomTabNavigator(
  {
    Home: HomeStack,
    Browse: BrowseStack,
    AddPost: AddPostStack,
  },
  {
    initialRoutename: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;

        if (routeName === 'Home') {
          var focus = focused;
          if (focus === false) {
            return (
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/images/icon_ionic_md_home.png')}
                  style={{
                    width: 21,
                    height: 21,
                    alignSelf: 'center',
                  }}
                />
                <Text style={{fontFamily: 'SegoeUI', fontSize: 10}}>Home</Text>
              </View>
            );
          } else {
            return (
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/images/home.png')}
                  style={{
                    width: 21,
                    height: 21,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    // fontSize: 10,
                    // fontWeight: 'normal',
                    // fontStyle: 'normal',
                    color: '#00b1f5',
                    fontFamily: 'SegoeUI',
                    fontSize: 10,
                  }}>
                  Home
                </Text>
              </View>
            );
          }
        } else if (routeName === 'Browse') {
          var focus = focused;
          if (focus === false) {
            return (
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/images/search1.png')}
                  style={{
                    width: 21,
                    height: 21,
                    alignSelf: 'center',
                  }}
                />
                <Text style={{fontFamily: 'SegoeUI', fontSize: 10}}>
                  Profile
                </Text>
              </View>
            );
          } else {
            return (
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/images/search.png')}
                  style={{
                    width: 21,
                    height: 21,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    // fontSize: 10,
                    // fontWeight: 'normal',
                    // fontStyle: 'normal',
                    color: '#00b1f5',
                    fontFamily: 'SegoeUI',
                    fontSize: 10,
                  }}>
                  Profile
                </Text>
              </View>
            );
          }
        } else if (routeName === 'AddPost') {
          var focus = focused;
          if (focus === false) {
            return (
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/images/ic_add_circle_24_px.png')}
                  style={{
                    width: 20,
                    height: 20,
                    alignSelf: 'center',
                  }}
                />
                <Text style={{fontFamily: 'SegoeUI', fontSize: 10}}>Post</Text>
              </View>
            );
          } else {
            return (
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../../assets/images/ic_add_circle_24px.png')}
                  style={{
                    width: 21,
                    height: 21,
                    alignSelf: 'center',
                    top: 0,
                  }}
                />
                <Text
                  style={{
                    // fontSize: 10,
                    // fontWeight: 'normal',
                    // fontStyle: 'normal',
                    color: '#00b1f5',
                    fontFamily: 'SegoeUI',
                    fontSize: 10,
                  }}>
                  Post
                </Text>
              </View>
            );
          }
        }
        //   return <Icon type='font-awesome' name={iconName}  size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'red',
      activeBackgroundColor: 'white',
      inactiveTintColor: 'red',
      style: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 3,
        color: 'black',
      },
      // tabStyle: {
      //   justifyContent:'space-around'
      // }
    },
  },
);

const App = createSwitchNavigator({
  HomeTab: {
    screen: businessTab,
  },
});

const DrawerStack = createDrawerNavigator(
  {
    Main: App,
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 288,
    contentComponent: DrawerContainer,
  },
);

const AppContainer = createAppContainer(DrawerStack);

export default class RoutingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <AppContainer />;
  }
}
