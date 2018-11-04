import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Note extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View style={style.container}>
                <Text>
                    Nota
                </Text>
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

export default Note;
