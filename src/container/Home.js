import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';


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
                <TouchableHighlight onPress={this.gotoNote}>
                    <Text>
                        Note
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;
