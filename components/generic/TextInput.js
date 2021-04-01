import React from 'react'
import { Item, Label, Input } from 'native-base'
import Styles from 'app/hooks/styles'

export default function TextInput({label, keyboardType, onChangeText, value}) {
    return (
        <Item floatingLabel>
            <Label style={Styles.fontText}>{label}</Label>
            <Input 
                keyboardType={keyboardType} 
                onChangeText={text => onChangeText(text)} 
                value={value}/>
        </Item>
    )
}