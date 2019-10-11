import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';


const LargeButton = props => {
    return (
        <View style={{ ...styles.outerContainer, ...props.outerStyle }}>
            <TouchableHighlight 
                style={styles.touchHighlight}
                onPress={props.onPress}
                underlayColor='rgba(0, 0, 0, 0.2)'
            >
                <View style={{ ...styles.buttonContainer, ...props.containerStyle }}>
                    <Text style={{ ...styles.button, ...props.buttonStyle }}>
                        {props.title}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        borderColor: Colors.textGrey,
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.26,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    buttonContainer: {
        
    },
    touchHighlight: {
        width: '100%',
    },
    button: {
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'open-sans-bold',
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 15
    }
});

export default LargeButton;
