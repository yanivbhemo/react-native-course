import React, { Component } from 'react'
import { ImageBackground, Image, Text, View } from 'react-native'
import { Header, Card, CardSection } from './common'

class ListFriends extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.imageBackgroundStyle}
        source={require('../img/background-screen.jpg')}
      >
        <Header pageTitle="My Friends" />
        <View style={styles.contentSection}>
          <Card>
            <CardSection style={styles.friendItem}>
              <Image style={styles.iconStyle} source={require('../img/defaultPic.jpg')} />
              <Text style={styles.textStyle}>Full Name</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.textStyle}>Date: (date)</Text>
              <Text style={styles.textStyle}>Gift: (gift)</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.textStyle}>Date: (date)</Text>
              <Text style={styles.textStyle}>Gift: (gift)</Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection style={styles.friendItem}>
              <Image style={styles.iconStyle} source={require('../img/defaultPic.jpg')} />
              <Text style={styles.textStyle}>Full Name</Text>
            </CardSection>
            <CardSection>
              <Text style={styles.textStyle}>Date: (date)</Text>
              <Text style={styles.textStyle}>Gift: (gift)</Text>
            </CardSection>
          </Card>
        </View>
      </ImageBackground>
    )
  }
}

const styles = {
  contentSection: {
    marginTop: 70
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%'
  },
  iconStyle: {
    width: 60,
    height: 60
  },
  textStyle: {
    paddingLeft: 20,
    fontSize: 18
  },
  friendItem: {
    alignItems: 'center'
  }
}

export default ListFriends
