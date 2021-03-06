import React from "react";
import {ListItem, Avatar } from "react-native-elements"
import { NativeBaseProvider, Container,Left,Right,HStack,List, Toast} from "native-base"


import {View, Text,TouchableOpacity,ScrollView, Button,StyleSheet,Dimensions, Image} from "react-native"
var {width,height}=Dimensions.get('window');
import { connect } from "react-redux";
import CartItems from "./CartItems";
import { SwipeListView } from 'react-native-swipe-list-view'


import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../Redux/Actions/cartActions"
import { paddingRight } from "styled-system";
import { NavigationContainer } from "@react-navigation/native";
import CheckoutNavigator from "../Navigationfolder/CheckoutNavigator"
import Checkout from "./Checkout/Checkout"
import HomeNavigator from "../Navigationfolder/HomeNavigator";
import Products from "../PRODUCTS/Products";
import Navpage from "../Navigationfolder/Navpage";
const CART =(props)=>{
    var Total=0;
    props.cartItems.forEach(cart => {
        return(
            Total+=cart.product.price
        )
        
    });
    const Emptycart=()=>{
      return(
        
        <View style={{alignItems:"center", backgroundColor:"gainsboro",height:height}}>
        <Image style={styles.imagess}
       source={require("../assets/lo.png")} 
       resizeMode="contain"/>
       <Text style={{fontSize:20,fontWeight:"bold", marginBottom:10}}> You Have no items in the Cart</Text>
       <Text style={{color:"grey", fontSize:15}}>Add items you want to Shop</Text>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate("WELCOME")}
       style={styles.emptybutton}>
         <Text style={{paddingTop:20, color:"white", fontWeight:"bold", fontSize:18}}>Continue Shopping</Text>

       </TouchableOpacity>
      
         </View>

      )
    }
    return(
        <>
           
           {props.cartItems.length ?
           (<ScrollView>
             <View style={{backgroundColor:"white"}}>
                  <View style={{marginBottom:30}}>
         
                  <SwipeListView
            data={props.cartItems}
            renderItem={(data) => (
             <CartItems item={data} />
            )}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity 
                style={styles.hiddenButton}
                onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name="trash" color={"orange"} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
            </View>
            <View style={{marginTop:30}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Total Price</Text>
                <Text style={{alignSelf:"flex-end",
                 position:"absolute" ,
                 fontSize:"15",
                  paddingRight:15,color:"orange",fontWeight:"bold"
              }}>GHC {Total}</Text>
                     <View style={{width:width, backgroundColor:"black",height:1}}></View>
                  <View style={{alignSelf:"flex-start",
                  padding:5,
                  marginTop:20,
                  marginBottom:12,
                   backgroundColor:"gainsboro"}}><Button title="Clear ALL" onPress={()=>props.clearCart()}/></View>
                
<View style={{backgroundColor:"orange", padding:23, width:width-20, right:-10,top:90,borderRadius:5}}>
 <TouchableOpacity onPress={()=>props.navigation.navigate('Checkout')}>
   <Text style={{alignSelf:"center", fontWeight:"bold", color:"white", fontSize:16}}>Continue To Place Order</Text>

 </TouchableOpacity>
</View>
<View style={{backgroundColor:"orange", padding:23, width:width-20, right:-10,top:100,marginBottom:200, borderRadius:5}}>
 <TouchableOpacity onPress={()=>alert("Contact Number :0557471572")}>
   <Text style={{alignSelf:"center", fontWeight:"bold", color:"white", fontSize:16}}>Call To Order</Text>

 </TouchableOpacity>
</View>

            </View>
            </View>



           
    

             </ScrollView>
          

           ):(
             <Emptycart/>
        
           )}
        </> 
            
    )

};
const mapDispatchToProps = (dispatch) => {
    return {
      clearCart: () => dispatch(actions.clearCart()),
      removeFromCart: (item) => dispatch(actions.removeFromCart(item))
      }
  }
  
const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
      cartItems: cartItems,
    };
  };
  const styles=StyleSheet.create(
    {
      hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
      },
      hiddenButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 1.2
      },
      imagess:{
        width:width/2,
        height:width/2,
  
        alignSelf:"center",
        marginBottom:30,
        marginTop:50

      },
      emptybutton:{
        width:width-140,
        height:60,
        backgroundColor:"orange",
        marginTop:70,
        marginBottom:50,
        borderRadius:3,
        alignItems:"center",
     

      }
      

    }

  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(CART);