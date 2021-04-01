import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './components/app/Inicio'
import AbmTipoDeMapaScreen from './components/app/map/AbmTipoDeMapaScreen'
import NuevosJugadoresScreen from './components/app/game/NuevosJugadoresScreen';

const firebaseConfig = {
  apiKey: "AIzaSyCbgtAtks6CM5AalqmkPOs6GH0G6r3wB-0",
  authDomain: "juegodemesa-5f9f2.firebaseapp.com",
  databaseURL: "https://juegodemesa-5f9f2.firebaseio.com",
  projectId: "juegodemesa-5f9f2",
  storageBucket: "juegodemesa-5f9f2.appspot.com",
  messagingSenderId: "475833262781",
  appId: "1:475833262781:web:5568245e190b1e7d080dd4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Inicio"
              component={InicioScreen}
              options={{ title: 'Inicio' }}
            />
            <Stack.Screen 
              name="TiposDeMapa" 
              component={AbmTipoDeMapaScreen} 
              options={{ title: 'Tipos de Mapa' }}
            />
            <Stack.Screen 
              name="NuevosJugadores" 
              component={NuevosJugadoresScreen} 
              options={{ title: 'Nuevos Jugadores' }}
            />
        </Stack.Navigator>
      </NavigationContainer>
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