import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import { Form, Item, Input, Button, Icon } from 'native-base';
import SimpleList, { SimpleListItem } from 'app/components/generic/List'
import Styles from 'app/hooks/styles'

export default function AbmSimple({placeholder, keyboardType, customAddList, initializeList = []}) {
    console.log(`Abm: ${initializeList}`)

    const [listItems, setListItems] = useState(initializeList)

    useEffect(() => setListItems(initializeList), [initializeList])

    const [inputItem, setInputItem] = useState()

    function addToList(data, customAddList) {
        console.log(`Nuevo dato: ${data}`)
        if (typeof customAddList === "function")
            setListItems(customAddList(data))
        else
            setListItems([...listItems, {key: data, name: data, text: data}])
    }

    return (
        <View style={Styles.container}>
            <Form>
                <Item>
                    <Input 
                        style={Styles.input} 
                        placeholder={placeholder} 
                        onChangeText={text => setInputItem(text)} 
                        value={inputItem}
                        keyboardType={keyboardType}/>
                    <Button 
                        onPress={() => addToList(inputItem, customAddList)}>
                        <Icon active name='add' />
                    </Button>
                </Item>
            </Form>

            <SimpleList 
                dataArray={listItems}
                renderRow={({item}) => <SimpleListItem text={item.text}/>}>
            </SimpleList>
        </View>
        
        /* <View style={Styles.container}>
            <Form>
                <Item>
                    <Input 
                        style={Styles.input} 
                        placeholder={placeholder} 
                        onChangeText={text => setListItem(text)} 
                        value={listItem}
                        keyboardType={keyboardType} />
                    <Button onPress={() => addToList(listItem, customAddList)}>
                        <Icon active name='add' />
                    </Button>
                </Item>
            </Form>

            <SimpleList 
                data={listItems} 
                renderRow={({item}) => <ListItem text={item.name}/>}>
            </SimpleList>
        </View> */
    )
}