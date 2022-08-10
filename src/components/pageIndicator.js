import React from "react";
import {Text,Pressable} from 'react-native';
import styled from 'styled-components';

const Container=styled.View`
width:50px;
height:50px;
border-radius:16px;
border:2px solid blue;
justify-content:center;
align-items:center;
margin:10px;
`;
export const PageIndicator=({pageNumber,fetchMovieListOnPageIndicatorClick})=>{
    return(
        <Pressable onPress={()=>fetchMovieListOnPageIndicatorClick(pageNumber)}>
         <Container>
           <Text>{pageNumber}</Text>
         </Container>
        </Pressable>
    );
}