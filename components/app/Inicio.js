import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Button from 'app/components/generic/Button';

export default function InicioScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("NuevosJugadores")}>
              <Text>Nuevo Jugador</Text>
            </Button>
            <Button onPress={() => navigation.navigate("TiposDeMapa")}>
              <Text>Tipos de Mapa</Text>
            </Button>
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingVertical: 50,
      paddingHorizontal: 10
    }
  });