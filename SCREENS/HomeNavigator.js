import React from "react";
import {createStackNavigator} from "@react-navigation/stack"

import Product from "../PRODUCTS/Products"
import ProductDetail from "../PRODUCTS/ProductDetail";
const Stack=createStackNavigator()


const Mystack=()=>{

    return(
        <Stack.Navigator>
        <Stack.Screen
        name="WELCOME"
        component={Product}
        options={{headerShown:false}}

        />
         <Stack.Screen
        name="Product Details"
        component={ProductDetail}
        options={{headerShown:false}}

        />
        






    </Stack.Navigator>



    )


}
export default function HomeNavigator(){
    return(
        <Mystack/>
    )


}