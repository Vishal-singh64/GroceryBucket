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
   const [searchData, setsearchData] = useState([])
   const [Visible, setVisible] = useState(false);

      const ListUpdateHandler=(text)=>{
        console.log(text.target)
        setVisible(false)
      }

    
      const handleAddText=()=>{
        setDisplayData([...DisplayData,GroceryData])
        setsearchData([...DisplayData,GroceryData])
        setVisible(false)
         }
    
    const handleSearch=(text)=>{
      if(text !== ''){
        const searchResult=DisplayData.filter((item)=>item.toLowerCase().includes(text.toLowerCase()))
        console.log(searchResult)
      setDisplayData(searchResult)
     } else {
       setDisplayData(searchData)
     }
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

        
    {DisplayData.reverse().map((item,index)=>{
      return (
        <GroceryList key={index}text={item} />
      )})}
       
    </MainContainer>
  )
}