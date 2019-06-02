import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { Header, Card, CardSection, Button } from './common'
import { Actions } from 'react-native-router-flux'

class UserMenu extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.imageBackgroundStyle}
        source={require('../img/background-screen.jpg')}
      >
        <Header pageTitle="Menu" />
        <View style={styles.buttonSection}>
          <Card>
            <CardSection>
              <Button
                onPress={() => {
                  Actions.eventsList()
                }}
              >
                My Events
              </Button>
            </CardSection>
          </Card>
          <Card style={styles.cardStyle}>
            <CardSection>
              <Button
                onPress={() => {
                  Actions.friendsList()
                }}
              >
                Friends
              </Button>
            </CardSection>
          </Card>
          <Card style={styles.cardStyle}>
            <CardSection>
              <Button>Settings</Button>
            </CardSection>
          </Card>
        </View>
      </ImageBackground>
    )
  }
}

const styles = {
  buttonSection: {
    marginTop: 70
  },
  cardStyle: {
    marginTop: 35
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%'
  }
}

export default UserMenu
