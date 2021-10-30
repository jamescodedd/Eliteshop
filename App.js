import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import { useState } from 'react'

import Products from  "./PRODUCTS/Products"
import Header from './SCREENS/Header';


export default function App() {
    return (
        
        <View> 
            <Header/>  
    <Products/>
        </View>
       
    )
}






