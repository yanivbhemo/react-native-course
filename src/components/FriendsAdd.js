/* eslint-disable no-console */
import React, { Component } from 'react'
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native'
import { Header, Card, CardSection, Input } from './common'

class FriendsAdd extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.imageBackgroundStyle}
        source={require('../img/background-screen.jpg')}
      >
        <Header pageTitle="Add a Friend" />
        <View style={styles.contentSection}>
          <Card>
            <CardSection style={styles.searchBar}>
              <Input label="Full Name" placeholder="Daniel Craig" />
            </CardSection>
          </Card>
          <Card>
            <CardSection style={styles.friendItem}>
              <Image style={styles.iconStyle} source={require('../img/defaultPic.jpg')} />
              <Text style={styles.textStyle}>Full Name</Text>
              <TouchableOpacity onPress={() => console.log('test')}>
                <Image style={styles.addBtn} source={require('../img/addBtn.png')} />
              </TouchableOpacity>
            </CardSection>
          </Card>
        </View>
      </ImageBackground>
    )
  }
}

const styles = {
  contentSection: {
    marginTop: 50
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%'
  },
  searchBar: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3
  },
  iconStyle: {
    width: 60,
    height: 60
  },
  textStyle: {
    paddingLeft: 20,
    fontSize: 18,
    width: '71%'
  },
  friendItem: {
    alignItems: 'center'
  },
  addBtn: {
    width: 30,
    height: 30
  }
}

export default FriendsAdd
