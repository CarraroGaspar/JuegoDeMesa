import React from 'react'
import List, { ListItem } from 'app/components/generic/List'

export default function ListaJugadoresScreen({jugadores}) {
    return (
        <List
            data={jugadores} 
            renderRow={({item}) => <ListItem text={item.key}/>}>
        </List>
    )
}