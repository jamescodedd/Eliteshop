import React, { useState } from "react"
import {Text,View, TouchableOpacity} from "react-native"
import {ListItem, Avatar } from "react-native-elements"
const CartItems=(props)=>{
    const data=props.item.item;
    const [quantity, setquantity]=useState(props.item.quantity)
return(


    <View style={{}}>
          <View style={{marginBottom:10,backgroundColor:"gainsboro"}}>
    <TouchableOpacity>
      
    <ListItem bottomDivider >
    <Avatar source={{uri:data.product.image}} />
<ListItem.Content>
<ListItem.Title style={{fontSize:13}}><Text style={{fontWeight:"bold"}}>{data.product.name}</Text></ListItem.Title>

<ListItem.Subtitle style={{position:"absolute",alignSelf:"flex-end"}} >
    <Text style={{fontWeight:'bold',color:"orange",fontWeight:"bold"}}>GHC {data.product.price}</Text>
</ListItem.Subtitle>



</ListItem.Content>



    </ListItem>
 
  
</TouchableOpacity> 
</View>

</View>



)




}
export default CartItems;