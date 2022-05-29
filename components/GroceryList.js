import { View, Text } from 'react-native'
import React from 'react'
import { ListContainer } from './style/GroceryList_Style'


export default function GroceryList(props) {
  return (
    <ListContainer>
        <Text>{props.text}</Text>
    </ListContainer>
  )
}