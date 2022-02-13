
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from  '@react-navigation/bottom-tabs';
import TransScr from './screens/transaction';
import SearchScr from './screens/search';
export default class App extends React.Component{
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Wily App</Text>
        <NavigationContainer>
           <Tab.Navigator>
             <Tab.Screen name='trans' component='TransScr'/>
             <Tab.Screen name='search' component='SearchScr'/>
           </Tab.Navigator>
        </NavigationContainer>
       
      </View>
       );
  }
  
 
}


const Tab=createBottomTabNavigator();





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
