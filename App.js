import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator, ScrollView, FlatList,   LogBox} from 'react-native'
import { useState } from 'react'
import {} from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native'
import {Provider} from "react-redux"
import store from "./Redux/store";
import Toast from "react-native-toast-message";



import Products from  "./PRODUCTS/Products"
import Header from './SCREENS/Header';
import Product from './PRODUCTS/Products'
import Navpage from './Navigationfolder/Navpage'
LogBox.ignoreAllLogs(true);








export default function App() {
    return (
    <Provider store={store}>
         <NavigationContainer>
         
            <Navpage/>
            <Toast ref={(ref) => Toast.setRef(ref)} />

</NavigationContainer>

        
    </Provider>
           
 
       
    )
}






