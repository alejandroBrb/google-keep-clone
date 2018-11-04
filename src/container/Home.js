import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { RButton } from '../components'

class Home extends Component {
    gotoNote() {
        Actions.note();
    }

    render() {
        return(
            <View style={style.container}>
                <Text>
                    Home
                </Text>
                <RButton
                    style={style.button}
                    onPress={this.gotoNote}
                    content={
                        <Text style={style.text}>
                            Note
                        </Text>}
                    />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000000'
    },
    button: {
        height: 60,
        width: 100
    }
});

export default Home;
