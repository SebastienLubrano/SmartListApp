import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
import Colors from '../constants/Colors';
import LargeButton from '../components/LargeButton';


export class LandingScreen extends Component {

    static navigationOptions = {
        header: null,
    };


    render() {

        return (
            <View style={styles.screen}>
                <StatusBar barStyle='light-content' />
                <View style={styles.topArea}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/app-icon.png')}
                            style={styles.image}
                            resizeMode='contain' />
                    </View>
                    <Text style={styles.headerText}>SmartList</Text>
                    <View style={styles.descriptionTextBox}>
                        <Text style={styles.descriptionText}>
                            A smart to-do list to create, manage, and track your tasks.
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomArea}>
                    <LargeButton
                        title='Log In'
                        outerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        onPress={() => this.props.navigation.navigate('LogIn')}
                        
                    />
                    <LargeButton
                        title=' Sign Up'
                        outerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.darkBlue
    },
    imageContainer: {
        width: '50%',
        aspectRatio: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    headerText: {
        color: Colors.white,
        fontSize: 35,
        fontWeight: "600",
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        marginBottom: 20
    },
    descriptionTextBox: {
        width: "80%"
    },
    descriptionText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'open-sans'
    },
    buttonContainer: {
        backgroundColor: Colors.offWhite,
        width: Dimensions.get("window").width * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    },
    button: {
        color: Colors.textGrey
    },
    topArea: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Dimensions.get('window').height * 0.1,
        flex: 1
    },
    bottomArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LandingScreen;
