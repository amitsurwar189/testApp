import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class DrawerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isVisible: false,
      selected: '',
    };
  }

  logout() {
    this.setState({isVisible: false});
    this.props.navigation.navigate('Login');
  }
  logout1() {
    this.props.navigation.closeDrawer();
    this.setState({isVisible: true});
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              width: 270,
              height: 40,
              borderRadius: 4,
              backgroundColor: '#f5f5f5',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 8,
              alignItems: 'center',
              padding: 8,
            }}>
            <Image
              source={require('../../assets/images/icon_ionic_ios_people.png')}
              style={{
                width: 17.5,
                height: 11.4,
                left: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 37,
                letterSpacing: 0,
                color: '#2a2b38',
                left: 35,
                fontFamily: 'SegoeUI',
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}
            style={{
              width: 270,
              height: 40,
              borderRadius: 4,
              backgroundColor: '#f5f5f5',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 8,
              alignItems: 'center',
              padding: 8,
            }}>
            <Image
              source={require('../../assets/images/icon_ionic_ios_people.png')}
              style={{
                width: 17.5,
                height: 11.4,
                left: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 37,
                letterSpacing: 0,
                color: '#2a2b38',
                left: 35,
                fontFamily: 'SegoeUI',
              }}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Post')}
            style={{
              width: 270,
              height: 40,
              borderRadius: 4,
              backgroundColor: '#f5f5f5',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 8,
              alignItems: 'center',
              padding: 8,
            }}>
            <Image
              source={require('../../assets/images/icon_ionic_ios_people.png')}
              style={{
                width: 17.5,
                height: 11.4,
                left: 15,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 37,
                letterSpacing: 0,
                color: '#2a2b38',
                left: 35,
                fontFamily: 'SegoeUI',
              }}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
