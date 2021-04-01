import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from 'app/components/generic/TextInput'
import { Button } from 'native-base'
import Styles from 'app/hooks/styles'

export default function TextInputWithButton({keyboardType, onPressButton, onChangeTextInnput, value, label, children}) {
    return (
        <View style={styles.container}>
            <View style={styles.viewinput}>
                <TextInput 
                    label={label} 
                    keyboardType={keyboardType} 
                    onChangeText={text => onChangeTextInnput(text)} 
                    value={value}
                    />
            </View>
            <View style={styles.viewbutton}>
                <Button style={Styles.button} onPress={onPressButton}>
                    {children}
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10
    },
    viewinput: {
        marginRight: 6,
        flex: 2
    },
    input: {
        borderWidth: 1,
        borderColor: '#f0f0f0',
        paddingVertical: 4,
        paddingHorizontal: 10,
        fontSize: 14
    },
    viewbutton: {
        marginLeft: 6,
        width: "auto"
    }
});