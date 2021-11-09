import React from "react";
import {ListItem, Avatar } from "react-native-elements"
import { NativeBaseProvider, Container,Left,Right,HStack,List, Toast} from "native-base"


import {View, Text,TouchableOpacity,ScrollView, Button,StyleSheet,Dimensions} from "react-native"
var {width}=Dimensions.get('window');
import { connect } from "react-redux";
import CartItems from "./CartItems";
import { SwipeListView } from 'react-native-swipe-list-view'



import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../Redux/Actions/cartActions"
import { paddingRight } from "styled-system";

const CART =(props)=>{
    var Total=0;
    props.cartItems.forEach(cart => {
        return(
            Total+=cart.product.price
        )
        
    });
    return(
        <>
           
           {props.cartItems.length ?
           (<ScrollView>
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
                  <Icon name="trash" color={"white"} size={30} />
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
                <Text style={{fontSize:20}}>Total Price</Text>
                <Text style={{alignSelf:"flex-end",
                 position:"absolute" ,
                 fontSize:"15",
                  paddingRight:15, 
                  textDecorationLine:"underline"}}>GHC {Total}</Text>
                  <View style={{alignSelf:"flex-start",
                  padding:5,
                  marginBottom:12,
                   backgroundColor:"gainsboro"}}><Button title="Clear ALL" onPress={()=>props.clearCart()}/></View>
<View style={{backgroundColor:"gainsboro", padding:23}}><Button
title="Checkout" onPress={()=>props.navigation.navigate('CheckoutNavigator')}/></View>
            </View>



           
    

             </ScrollView>
          

           ):(
               <View>
                   <Text>PLEASE CART EMPTY, SELECT A PRODUCT</Text>

               </View>
        
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
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 1.2
      }
    }

  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(CART);