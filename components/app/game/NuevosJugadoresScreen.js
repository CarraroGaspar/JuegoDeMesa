import React, { useState } from 'react'
import { View } from 'react-native';
import TextInputWithButton from 'app/components/generic/TextInputWithButton'
import AbmSimple from 'app/components/generic/Abm'
import ListaJugadoresScreen from 'app/components/app/game/ListaJugadoresScreen'
import { Icon } from 'native-base'
import Styles from 'app/hooks/styles'


export default function NuevosJugadoresScreen() {
    let arrayJugadores = []

    return (
        <AbmSimple placeholder="Nuevo jugador">
        </AbmSimple>
    )
    //const [cantidadJugadores, setCantidadJugadores] = useState(0)
    //const [jugadores, setJugadores] = useState([])

    //return (
    //    <View style={Styles.container}>
    //        <View style={{flex:1,alignItems:"stretch"}}>
    //            <TextInputWithButton 
    //                keyboardType="numeric" 
    //                label="Cantidad"
    //                onChangeTextInnput={text => {
    //                    console.log(text)
    //                    setCantidadJugadores(text)
    //                }}
    //                value={cantidadJugadores}
    //                onPressButton={() => {
    //                    arrayJugadores = []
    //                    for (let index = 0; index < cantidadJugadores; index++) {
    //                        arrayJugadores.push({key: "Gaspar"})
    //                    }
    //                    console.log(arrayJugadores)
    //                    setJugadores(arrayJugadores)
    //                }}>
    //                <Icon name="add" style={Styles.textButton}></Icon>
    //            </TextInputWithButton>
    //        </View>
    //        <View style={{flex:3,alignItems:"stretch"}}>
    //            <ListaJugadoresScreen jugadores={jugadores} />
    //        </View>
    //    </View>
    //)
}