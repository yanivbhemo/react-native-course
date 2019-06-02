import React, { Component } from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { Header, Card, CardSection, Input, Button } from './common'
import DatePicker from 'react-native-datepicker'

class EventAdd extends Component {
  constructor(props) {
    super(props)
    this.state = { date: '2010-01-01' }
  }

  render() {
    return (
      <ImageBackground
        style={styles.imageBackgroundStyle}
        source={require('../img/background-screen.jpg')}
      >
        <Header pageTitle="Add a personal event" />
        <View style={styles.contentSection}>
          <Card>
            <CardSection>
              <Input label="Title" placeholder="Birthday" />
            </CardSection>
            <CardSection>
              <Input label="Gift" placeholder="Golden Ring" />
            </CardSection>
            <CardSection>
                <Text>Date</Text>
            </CardSection>
            <CardSection>
              <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1900-01-01"
                maxDate="2030-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date })
                }}
              />
            </CardSection>
            <CardSection>
                <Button>
                    Create
                </Button>
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
    height: '100%',
    flex: 1
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

export default EventAdd
