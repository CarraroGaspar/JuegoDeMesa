import {useState, useEffect} from 'react'
import {getAllFromCollection} from 'app/services/serviceFirebase'

export default function useTipoMapa() {
    const [listaTiposMapa, setListaTiposMapa] = useState([])

    useEffect(() => {
        getAllFromCollection('tipo_mapa')
            .then(list => {
                let nuevaLista = []
                list.forEach(el => {
                    nuevaLista.push({key: el.val().nombre, text: el.val().nombre})
                })
                setListaTiposMapa(nuevaLista)
            })
            .catch(error => console.log(error.toString()))
    }, [])

    return [listaTiposMapa, setListaTiposMapa]
}