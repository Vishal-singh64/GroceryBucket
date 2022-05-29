import styled from "styled-components";

export const MainContainer=styled.View`
flex:1;
width: 100%;
margin-top: 50px;
background-color: whitesmoke;
`
export const SearchBar=styled.TextInput`
width: 80%;
padding: 10px;
border-radius: 20px;

border-width: 1px;
justify-content: center;
align-items: center;
`
export const Search_Add=styled.View`
flex-direction: row;
padding: 10px;

`
export const AddBtn=styled.TouchableOpacity`
background-color: white;
margin-left: 10px;
height: 50px;
width: 50px;
border-radius: 25px;
justify-content: center;
text-align: center;
align-items: center;
`