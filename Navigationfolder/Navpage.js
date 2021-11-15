import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {View,Text, ScrollView,SafeAreaView} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator"
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
const Bottomtab=createBottomTabNavigator();




import CartIcon from "../Cart/CartIcon"


const Navpage=()=>{
return(

     <Bottomtab.Navigator
  
  initialRouteName="Home"
  tabBarOptions={{
    keyboardHidesTabBar: true,
    showLabel: false,
    activeTintColor: "orange",
    inactiveTintColor: "white"
  }}
  >
       <Bottomtab.Screen
    name="Elite Shopping hub"
    component={HomeNavigator}
    options={{ title:"Elite Shopping Hub", 
  
    headerStyle:{backgroundColor:"black",
    borderTopWidth:20,height:80,
    borderTopColor:"#0d0d0b"
    },
    headerTitleStyle:{
      color:"white"
    },
    tabBarStyle:{
      backgroundColor:"black"
    }
    ,
      tabBarIcon: ({ color }) => (
        <Icon name="home"
         color={color}
          size={30} />
      ),
   
    }}
  />
  
  <Bottomtab.Screen
    name="Cart"
    component={CartNavigator}
    options={{
      title:"Cart", 
    headerStyle:{backgroundColor:"black",
    borderTopWidth:20,height:80,
    borderTopColor:"#0d0d0b"
    },
    headerTitleStyle:{
      color:"white"
    },
    tabBarStyle:{
      backgroundColor:"black"
    }
    ,
      tabBarIcon: ({ color }) => (
        <View style={{marginTop:12}}>
          
          <Icon name="shopping-cart"
           color={color}
            size={30} />
        <CartIcon/>
        </View>
    
   
      ),
    }}
  />
   <Bottomtab.Screen
    name="Categories"
    component={HomeNavigator}
    options={{
      title:"Categories", 
      headerStyle:{backgroundColor:"black",
      borderTopWidth:20,height:80,
      borderTopColor:"#0d0d0b"
      },
      headerTitleStyle:{
        color:"white"
      },
      tabBarStyle:{
        backgroundColor:"black"
      }
      ,
      tabBarIcon: ({ color }) => (
        
            <MaterialIcons name="category"
         color={color}
          size={30} />

      
      ),
    }}
  />
   <Bottomtab.Screen
    name="User"
    component={UserNavigator}
    options={{  title:"User", 
    headerStyle:{backgroundColor:"black",
    borderTopWidth:20,height:80,
    borderTopColor:"#0d0d0b"
    },
    headerTitleStyle:{
      color:"white"
    },
    tabBarStyle:{
      backgroundColor:"black"
    }
    ,
      tabBarIcon: ({ color }) => (
        <Icon name="user" color={color} size={30} />
      ),
    }}
  />
  



    

</Bottomtab.Navigator>

   






);



}
export default Navpage;