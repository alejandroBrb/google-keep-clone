import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, StyleSheet, Dimensions } from 'react-native';

import Color from './../styles/Color';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const RButton = (props) => {
  return(
    <TouchableHighlight
        style={[style.button, props.style]}
        onPress={props.onPress}
        disable={props.disable}
        underlayColor={Color.yellow_d}
        >
        <View>
            {props.content}
        </View>
    </TouchableHighlight>
  );
}

RButton.defaultProps = {
  disable: false,
},

RButton.propTypes = {
  disable: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
}

const style = StyleSheet.create({
  button: {
    width: width,
    height: height * 0.1,
    backgroundColor: Color.yellow_p,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RButton;
