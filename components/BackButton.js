import React from 'react'
import { View, Button, StyleSheet, TouchableHighlight } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Colors from '../constants/Colors';

const BackButton = props => {

    const iconStyle= {
        "color": Colors.darkBlue,
        "margin": "auto",
        'border' : 'none',
        'alignSelf' : 'center'
    };

    return (
        <View style={{ ...styles.outerContainer, ...props.outerStyle }}>
            <TouchableHighlight
                onPress={props.onPress}
                style={styles.touchHighlight}
                underlayColor='rgba(0, 0, 0, 0.2)'
            >
                <View style={{ ...styles.buttonContainer, ...props.containerStyle }}>
                    <FontAwesomeIcon
                        icon={Icons.faChevronLeft}
                        size={30}
                        color={Colors.darkBlue}
                        style={props.iconStyle}
                    />
                </View>
            </TouchableHighlight >
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingLeft: 5
    },
    outerContainer: {
        backgroundColor: Colors.offWhite,
        borderColor: Colors.textGrey,
        borderWidth: 1,
        borderRadius: 25,
        overflow: 'hidden',
        width: 50,
        height: 50
    },
    button: {

    },
    touchHighlight: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        paddingLeft: 1
    },
});

export default BackButton;
