import React, {useState} from 'react'
import { View } from 'react-native';
import { Form, Item, Input, Button, Icon } from 'native-base';
import List from 'app/components/generic/List'
import serviceFirebase from 'app/services/serviceFirebase'
import useTipoMapa from 'app/hooks/useTipoMapa';
import Styles from 'app/hooks/styles'
import AbmSimple from 'app/components/generic/Abm'

export default function AbmTipoDeMapaScreen() {
    console.log("------------------------------------------------------------------------------------------------")

    const [tipoMapa, setTipoMapa] = useState("")
    const [listaTiposMapa, setListaTiposMapa] = useTipoMapa()

    const agregarTipoMapa = data => {
        const setFirebase = serviceFirebase()

        setFirebase("tipo_mapa", {nombre: data})
            .then(() => setTipoMapa(""))
            .catch(error => console.log(error.toString()))

        setListaTiposMapa([...listaTiposMapa, {key: data}])
    }

    return (
        <AbmSimple initializeList={listaTiposMapa} customAddList={(data) => agregarTipoMapa(data)}/>
    )

    /* const [tipoMapa, setTipoMapa] = useState("")
    const [listaTiposMapa, setListaTiposMapa] = useTipoMapa()

    const agregarTipoMapa = data => {
        const setFirebase = serviceFirebase()

        setFirebase("tipo_mapa", {nombre: data})
            .then(() => setTipoMapa(""))
            .catch(error => console.log(error.toString()))

        setListaTiposMapa([...listaTiposMapa, {key: data}])
    }

    return (
        <View style={Styles.container}>
            <Form>
                <Item>
                    <Input style={Styles.input} placeholder="Tipo de mapa" onChangeText={text => setTipoMapa(text)} value={tipoMapa}/>
                    <Button onPress={() => agregarTipoMapa(tipoMapa)}>
                        <Icon active name='add' />
                    </Button>
                </Item>
            </Form>

            <List dataArray={listaTiposMapa}></List>
        </View>
    ) */
}