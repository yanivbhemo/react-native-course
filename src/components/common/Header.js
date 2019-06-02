/* eslint-disable import/prefer-default-export */
// Import libs for making a component
import React from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const logoURI = require('../../img/logo.png')
// Make a component
const Header = props => {
  const { imageStyle, viewStyle } = styles

  return (
    <View style={[viewStyle, props.style]}>
      <Image source={logoURI} style={imageStyle} />
      <Text style={styles.pageTitle}>{props.pageTitle}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    paddingTop: 50,
    elevation: 2,
    position: 'relative'
  },
  imageStyle: {
    width: 230,
    height: 170,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2
  },
  pageTitle: {
    fontSize: 24,
    fontFamily: 'Gujarati Sangam MN',
    fontWeight: 'bold'
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string,
  style: PropTypes.object
}

// Make the component available to other parts of the app
export { Header }
