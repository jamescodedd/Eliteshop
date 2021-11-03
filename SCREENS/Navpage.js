import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {View,Text, ScrollView} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator"
const Bottomtab=createBottomTabNavigator();


const Navpage=()=>{
return(
    <Bottomtab.Navigator
  
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
      >
           <Bottomtab.Screen
        name="Elite Shopping hub"
        component={HomeNavigator}
        options={{ 
          tabBarIcon: ({ color }) => (
            <Icon name="home"
             color={color}
              size={30} />
          ),
        }}
      />
      
      <Bottomtab.Screen
        name="Cart"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
        
              <Icon name="shopping-cart"
               color={color}
                size={30} />
            
       
          ),
        }}
      />
       <Bottomtab.Screen
        name="Categories"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category"
             color={color}
              size={30} />
          ),
        }}
      />
       <Bottomtab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
      

    

        

    </Bottomtab.Navigator>






);



}
export default Navpage;