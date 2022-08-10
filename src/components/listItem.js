import React,{useState} from "react";
import {Text,Image,View,Dimensions} from 'react-native';
import styled from 'styled-components';
import { List } from 'react-native-paper';
const ListItemContainer=styled.View`
margin:10px 0;
background-color:#fff;
`;
const ContentContainer=styled.View`
padding:10px;
`;
const Cancel=styled.Text`
color:red;
font-size:22px;
`;
const Open=styled.Text`
color:blue;
font-size:22px;
`;
const Row=styled.View`
flex-direction:row;
justify-content:space-between;
aligin-items:center;
margin-top:10px;
`;
export const ListItem=({item})=>{
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => {
        setExpanded(!expanded)
    };
    return ( 
        <ListItemContainer>
         <List.Accordion
          title={item.Title}
          onPress={handlePress}
          right={() =>
          <View>
            {
             expanded? <Cancel>X</Cancel>: <Open style={{transform: [{ rotate: '180deg'}]}}>^</Open>
            }
          </View>}
          >
            <ContentContainer>
                <Image
                 style={{width:Dimensions.get('window').width-40,height:200}} 
                 source={{uri:item.Poster}} 
                />
                <Row>
                    <Text>Type : {item.Type}</Text>
                    <Text>Year : {item.Year}</Text>
                </Row>
            </ContentContainer>
          </List.Accordion>
        </ListItemContainer>
        );
}