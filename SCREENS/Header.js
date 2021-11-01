import React from "react";
import { StyleSheet, Text, View , SafeAreaView, Image,Dimensions,TouchableOpacity} from 'react-native'
var { width } = Dimensions.get("window");
const Header=()=>{
    return (
    <TouchableOpacity>
       <SafeAreaView style={styles.header}>
           < Image style={{ width:width/6, height:width/6}} source={require("../assets/lo.png")}/>
           <Text style={styles.headname}>Elite Shop</Text>


       </SafeAreaView></TouchableOpacity>
    )
}




const styles = StyleSheet.create({
headname:{
   fontWeight:"bold"
,
fontStyle:"italic"
},
header:{
    backgroundColor:"white",
    alignItems:"center",
  
   borderBottomWidth:5,
   borderLeftWidth:1,
   borderRightWidth:1,

    borderRadius:40,
    borderBottomLeftRadius:100
}

})
export default Header;