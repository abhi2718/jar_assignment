import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {View,Text,SafeAreaView,FlatList,StyleSheet,Dimensions,ScrollView} from 'react-native';
import styled from 'styled-components';
import {PageIndicator} from '../components/pageIndicator';
import {getResourceAction} from '../store/actions/resource_action/res_action';
import{ListItem} from '../components/listItem';
const totalPageArr=['1','2','3','4','5','6','7','8','9','10'];
const Container = styled.View`
padding:10px;
flex:1;
width:${()=>`${Dimensions.get('window').width}px`}
`;
const Body=styled.View`
flex:0.9;
`;
const Footer=styled.View`
flex:0.1;
justify-content:center;
align-items:space-between;
`;
const Heading=styled.Text`
text-align:center;
color:blue;
font-size:20px;
`;
export const HomeScreen=()=>{
    const {loading,errMsg,resource}=useSelector((state)=>state.resourceStore);
    const dispatch=useDispatch();
    const fetchMovieListOnPageIndicatorClick=(pageNumber)=>{
         dispatch(getResourceAction(pageNumber));
    }
    
    return(
        <SafeAreaView style={styles.container}> 
            <Container>
                <Heading>Movie List</Heading>
                <Body>
                <FlatList 
                  data={resource.Search}
                  renderItem={({item})=><ListItem item={item}/>}
                  keyExtractor={item => item.imdbID}
                  />
                </Body>
               <Footer>
                <ScrollView horizontal={true}>
                   {totalPageArr.map(
                    (item)=>
                    <PageIndicator 
                        key={item} 
                        pageNumber={item}
                        fetchMovieListOnPageIndicatorClick={fetchMovieListOnPageIndicatorClick}
                    />
                    )}
                </ScrollView>
               </Footer>
            </Container>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  });