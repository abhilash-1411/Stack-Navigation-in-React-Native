
import React from 'react';

import { Button, Text,View,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { HeaderSearch } from './components/Header';
const Stack=createNativeStackNavigator();


const App=()=> {
  const btnAction=()=>{
  console.warn('Button Pressed')
  }
return (
    <NavigationContainer >
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:'skyblue',
       },
       headerTintColor:'Black',
       headerTitleStyle:{
        fontSize:20
       }
       }}
      >

     <Stack.Screen name='Login' component={Login} 
     options={{
      headerTitle:()=><Button title='Left' onPress={btnAction}/>,
      headerRight:()=><HeaderSearch/>,
      title:"User Login",
      headerStyle: {
        backgroundColor:'orange'
     },
     headerTintColor:'white',
     headerTitleStyle:{
      fontSize:20
     }
     }}
     />
     <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}




export default App;
