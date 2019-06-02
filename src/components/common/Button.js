/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ onPress, children }) => {
  //const URI = '../img/addBtn.png';
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  BtnImageStyle: {
    height: 25,
    width: 25
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  // eslint-disable-next-line prettier/prettier
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
])
}

export { Button }
