import {useState, useEffect} from 'react'
import serviceFirebase from 'app/services/serviceFirebase'
import { AsyncStorage } from 'react-native';

//const [partida, setPartida] = useState(0)

function getPartida(idPartida) {

}

function nuevaPartida(idPartida) {
    const setFirebase = serviceFirebase()

    setFirebase("partida", {id: idPartida})
        .then(() => AsyncStorage.setItem('IdPartida', idPartida))
        .catch(error => console.log(error.toString()))
}

export default function usePartida() {
    useEffect(() => {
        getAllFromCollection('partida')
            .then(list => {
                let nuevaLista = []
                list.forEach(el => {
                    nuevaLista.push({key: el.val().nombre})
                })
                setListaTiposMapa(nuevaLista)
            })
            .catch(error => console.log(error.toString()))
            console.log(listaTiposMapa)
    }, [])

    return [getPartida, nuevaPartida]
}