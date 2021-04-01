import React from 'react'
import { Text } from 'react-native';
import { List, ListItem } from 'native-base';
import Styles from 'app/hooks/styles'

export default function SimpleList({dataArray, renderItem}) {
    return (
        <List style={Styles.list}
            dataArray={dataArray} 
            renderItem={
                typeof renderItem === "function" ? 
                    ({item}) => renderItem(item) : 
                    ({item}) => <SimpleListItem text={item.key}/>}>
        </List>
    )
}

export function SimpleListItem({text}) {
    return <ListItem><Text style={Styles.itemList}>{text}</Text></ListItem>
}

//const styles = StyleSheet.create({
//    list: {
//        position: 'relative',
//        top: 0,
//        marginTop: 20
//    },
//    item: {
//        paddingVertical: 14,
//        fontSize: 16,
//        paddingHorizontal: 8,
//        borderBottomColor: "#f1f1f1",
//        borderBottomWidth: 1
//    }
//})