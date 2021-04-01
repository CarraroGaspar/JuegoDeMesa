import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from 'app/hooks/styles'

export default function Button({onPress, children}) {
    return (
      <TouchableOpacity onPress={onPress} style={Styles.button}>
        <Text style={[Styles.textButton, Styles.fontText]}>
          {children}
        </Text>
      </TouchableOpacity>
    )
}