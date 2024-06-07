import React, { useState } from 'react';
import { Button, Text,View,TextInput} from 'react-native';
export const Login=(props)=>{
    const [name,setName]=useState("")
    const age=23
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}> Login Screen</Text>
      <TextInput  
      style={{fontSize:25,borderColor:'#000',borderWidth:2}}
      placeholder='Enter your name' onChangeText={(text)=>setName(text)}/>
      <Button title='Go to Home Page' 
      onPress={()=>props.navigation.navigate('Home',{name,age})} />
    </View>
    )
  }