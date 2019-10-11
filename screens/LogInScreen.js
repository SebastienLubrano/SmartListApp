import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import BackButton from '../components/BackButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export default class LogInScreen extends Component {

    static navigationOptions = {
        header: null
    }

    backButtonPressHandler = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.screen}>
                <BackButton 
                    outerStyle={styles.containerStyle}
                    buttonStyle={styles.buttonStyle}
                    onPress={this.backButtonPressHandler}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.darkBlue
    },
    containerStyle:{
        position: 'absolute',
        left: 20,
        top: (getStatusBarHeight(false) + 20),
    },
    buttonStyle: {
        
    },

});
