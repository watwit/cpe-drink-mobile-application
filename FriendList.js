import moment from 'moment';
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, FlatList, TouchableOpacity,Modal
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      user: [{
        id: '1',
        users: {
          id: 'u2',
          name: 'Watcharawit',
          imageUri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          caption:'โต๊ะ 8'
        },
        lastMessage: {
          id: 'm1',
          content: 'hi!',
          createdAt: '2020-10-03T14:48:00.000Z',
          sender: "1"
        }
      },
      {
        id: '2',
        users: {
          id: 'u2',
          name: 'Watcharawit1',
          imageUri: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          caption:'โต๊ะ 20'
        },
        lastMessage: {
          id: 'm1',
          content: 'hiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!',
          createdAt: '2020-10-03T14:48:00.000Z',
          sender: "2"
        }
      }],
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.txtHeader}>จำนวนคนในร้านทั้งหมด</Text>
      </View>
    )

  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#dddddd",
        }}
      />
    );
  };
  renderItem = ({ item }) => {
    return (
      <View style={{backgroundColor:'#E5E5E5'}}>
        <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
          <View style={styles.container}>
            <View style={styles.lefContainer}>
              <Image style={styles.profile} source={{ uri: item.users.imageUri }} />
              <View style={styles.midContainer}>
                <Text style={styles.name}>{item.users.name}</Text>
                <Text style={styles.txtcaption} numberOfLines={1}>{item.users.caption}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={styles.addFriend}>
                  <AntDesign name="adduser" size={26} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  render(props) {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <this.Header />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.user}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems:'center'
    // marginVertical: 8,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around',
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 3,
    marginRight: 15,
    borderColor: 'white'
  },
  name: {
    fontSize: 18,
    fontFamily:'kanitSemiBold',
  },
  txtcaption: {
    fontSize: 16,
    color: 'gray',
    width: 100,
    fontFamily:'kanitLight',
  },
  time: {
    fontSize: 16,
    color: 'gray'
  },
  txtHeader: {
    fontSize: 20,
    fontFamily:'kanitRegular'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
    margin: 15,
    backgroundColor: '#E5E5E5',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  addFriend: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width:50,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },




  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default FriendList;