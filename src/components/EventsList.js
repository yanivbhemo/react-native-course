import React, { Component } from 'react'
import { ImageBackground, Image, Text, View } from 'react-native'
import { Header, Card, CardSection } from './common'

class EventsList extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.imageBackgroundStyle}
        source={require('../img/background-screen.jpg')}
      >
        <Header pageTitle="List of your events" />
        <View style={styles.contentSection}>
          <Card>
            <CardSection>
              <Image style={styles.giftIcon} source={require('../img/icon.png')} />
            </CardSection>
            <CardSection>
              <Text style={styles.titleStyle}>Event Title</Text>
              <Text style={styles.dateStyle}>Event Date</Text>
            </CardSection>
            <CardSection>
              <Text>Remove</Text>
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
  giftIcon: {
    width: 50,
    height: 50
  },
  titleStyle: {
    paddingRight: 170,
    fontWeight: 'bold',
    fontSize: 18
  },
  dateStyle: {
    fontWeight: 'bold',
    fontSize: 16
  }
}

export default EventsList
