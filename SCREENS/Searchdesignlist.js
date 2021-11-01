import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import SearchDesign from "./SearchDesign"
var {width}=Dimensions.get('window');
const Searchdesignlist=(props)=>{
const {item}=props;
    return (
        <TouchableOpacity style={{width:'50%'}} >
            <View style={{width:width/2}}>
            <SearchDesign {...item}/>
        </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({


})
export default Searchdesignlist;