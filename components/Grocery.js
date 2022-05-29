import { View, Text,TextInput} from 'react-native'
import React,{useState} from 'react'
import { AddBtn, MainContainer, SearchBar, Search_Add } from './style/GroceryStyle'
import GroceryList from './GroceryList'

import Modal from 'react-native-modal';
import { BtnContainer, CancelDataBtn, 
    Modalbody, UpdateDataBtn } from './modalStyle';



export default function Grocery() {
   const [GroceryData, setGroceryData] = useState()
   const [DisplayData, setDisplayData] = useState([])
   const [Visible, setVisible] = useState(false);

      const ListUpdateHandler=(text)=>{
        console.log(text.target)
        setVisible(false)
      }

    
      const handleAddText=()=>{
        setDisplayData([...DisplayData,GroceryData])
        setVisible(false)
         }
    
    const handleSearch=(text)=>{
        const searchResult=DisplayData.filter((item)=>item.includes(text))
      setDisplayData(searchResult)
      }
    
  return (
    <MainContainer>
    <Search_Add>    
    <SearchBar placeholder="Seacrh" onChangeText={(text)=>{handleSearch(text)}}/>
    
    <View>
        <Modal isVisible={Visible} onBackButtonPress={()=>{setVisible(false)}}>
        <Modalbody>
        <TextInput placeholder="Enter your Grocery" 
        onChangeText={(text)=>{setGroceryData(text)}}/>
            <BtnContainer>
            <UpdateDataBtn  
            onPress={(text)=>{handleAddText()}}>
            <Text>Add</Text>
            </UpdateDataBtn>
            <CancelDataBtn onPress={()=>{setVisible(false)}}>
            <Text>Cancel</Text>    
            </CancelDataBtn>
            </BtnContainer>
          
        </Modalbody>
        </Modal>
         <AddBtn onPress={()=>{setVisible(true)}}>
            <Text>+</Text></AddBtn>
            </View>

    </Search_Add>

        
    {DisplayData.map((item,index)=>{
      return (
        <GroceryList key={index}text={item} />
      )})}
       
    </MainContainer>
  )
}
