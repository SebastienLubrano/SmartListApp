import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import BackButton from '../components/BackButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Card from '../components/Card';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';


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
                <Card style={styles.cardStyle}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            Log In
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <CustomTextInput 
                            title='Email'
                            placeholder='Enter your email'
                            outerStyle={styles.textInput}
                        />
                        <CustomTextInput 
                            title='Password'
                            placeholder='Enter your password'
                            outerStyle={styles.textInput}
                            secureTextEntry={true}
                        />
                        <CustomButton 
                            containerStyle={styles.submitButtonContainer}
                            textStyle={styles.submitButton}
                            title="SUBMIT"
                        />
                    </View>
                    
                </Card>
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
    cardStyle: {
        aspectRatio: 0.75,
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: Colors.offWhite,
        flexDirection: 'column',
        alignSelf: 'center',
        overflow: 'hidden'
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    inputContainer: {
        flex: 4,
    },
    headerText: {
        textAlign: 'center',
        fontFamily: 'open-sans-semibold',
        fontSize: 30,
        color: Colors.darkBlue
    },
    textInput: {
        width: '90%',
        height: 70,
        alignSelf: 'center',
        backgroundColor: Colors.offWhite,
        marginTop: 30
    },
    submitButtonContainer: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: Colors.darkBlue,
        marginTop: 30
    },
    submitButton: {
        textAlign: 'center',
        color: Colors.white
    },
});
