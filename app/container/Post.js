import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Post 1',
          count: 4,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 2,
          title: 'Post 2',
          count: 4,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 3,
          title: 'Post 3',
          count: 4,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 4,
          title: 'Post 4',
          count: 4,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 5,
          title: 'Post 5',
          count: 4,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 6,
          title: 'Post 6',
          count: 4,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 7,
          title: 'Post 7',
          count: 4,
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
      ],
    };
  }

  addProductToCart = () => {
    Alert.alert('Success');
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 50,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              top: -5,
            }}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Image
              source={require('../../assets/images/group_37.png')}
              style={{
                width: 16,
                height: 14,
              }}
            />
          </TouchableOpacity>
          <View>
            {/* <Image
              source={require('../../assets/images/mask_group_4.png')}
              style={{
                width: 97,
                height: 16,
              }}
            /> */}
            <Text style={{fontSize: 20, top: 5}}>Post Screen</Text>
          </View>
          <View style={{}}></View>
        </View>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.cardImage} source={{uri: item.image}} />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.count}>({item.count})</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: '#778899',
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: '#B0C4DE',
  },
});
