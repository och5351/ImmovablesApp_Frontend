import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    red: {
        backgroundColor: '#F88262',
        alignItems: 'center',
        padding: 10,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
    white: {
        color:'white'
    },
    black:{
        color:'black'
    },
    onbutton:{
      justifyContent:'center', 
      alignItems:'center', 
      width:100,
      height:30,
      borderRadius:50, 
      borderWidth:0.5,
      borderColor:'#a7a7a7',
      backgroundColor:'#F88262'
    },
    offbutton:{
      justifyContent:'center', 
      alignItems:'center', 
      width:100,
      height:30,
      borderRadius:50, 
      borderWidth:0.5,
    },
    inputbutton:{
      color:'#000', 
      width:'90%', 
      height:40, 
      borderWidth:0.5, 
      borderRadius:5,
      borderColor:'#a7a7a7' ,
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor:"#F88262"}
});

export default styles;