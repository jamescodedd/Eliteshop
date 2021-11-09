import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  Dimensions,
  LogBox,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../Redux/Actions/cartActions"





import Categories from "../SCREENS/catergories";
import Banner from "../SCREENS/Banner"
import Search from "../SCREENS/Search";

var { width } = Dimensions.get("window");
const Data = require("../assets/Data.json");
import CatData from "../assets/094 categories.json";
import Productlist from "./productlist"


LogBox.ignoreAllLogs(true);

const Product = (props) => {
  const [products, assign] = useState([]);
  const [cat, sets] = useState([]);
  const [active, setact] = useState();
  const [intial, setinit] = useState([]);
  const [productt, getproduct] = useState([]);

  useEffect(() => {
    assign(Data);
    sets(CatData);
    setact(-1);
  
    setinit(Data);
    getproduct(Data)
    
    return () => {
      assign([]);
      sets([]);
      setact();
      setinit();
    };
  }, []);
  //categories filter
  const changecat = (cat) => {
    {
      cat === "ALL"
        ? [getproduct(intial), setact(true)]
        : [
            getproduct(
              products.filter((i) => i.category._id === cat),
              setact(true)
            ),
          ];
    }
  };
  return (
    <View>
      <View style={styles.products}>
        

      </View>
      <ScrollView>
     <View>
     <Search
      navigation={props.navigation} />
       <View>
  
       
       <Categories
   cat={cat}
   Categories={changecat}
   productt={productt}
   active={active}
   setact={setact} />
       </View>
      
       {productt.length > 0 ? (
       <View style={styles.flatlist}>
        


               <Banner/>
          
      
    


         
           <View style={{flexDirection:"row", flexWrap:"wrap", backgroundColor:"gainsboro"}}>
           {productt.map((item) => {
               return(
                   <Productlist
                   navigation={props.navigation}
                      
                       key={item._id}
                       item={item}
                   />
               )
           })}</View>    
       </View>
       ) : (
           <View style={[styles.center, { height: '40%'}]}>
               <Text>No products found</Text>
           </View>
       )}
       <View style={{height:width}}></View>
      
     </View>
   </ScrollView>
      
             
    </View>
  );
};
const mapDispatchToProps=(dispatch)=>{
  return{
    addItemToCart:(product)=>
    dispatch(actions.addToCart({quantity:1,product}) )
  }
}
const styles = StyleSheet.create({
  products: {
    alignItems: "center",
    backgroundColor: "lavender",
  },
  flatlist: {},
});
export default connect(null,mapDispatchToProps)(Product);
