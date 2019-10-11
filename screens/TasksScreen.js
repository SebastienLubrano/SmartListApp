import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

class TasksScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.screen}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.darkBlue
    }
});

export default TasksScreen;