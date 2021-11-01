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
import Productlist from "./Productlist";
import { SearchBar } from "react-native-elements";
import Search from "../SCREENS/Search";
import Categories from "../SCREENS/catergories";
import Banner from "../SCREENS/Banner"

var { width } = Dimensions.get("window");
const Data = require("../assets/Data.json");
import CatData from "../assets/094 categories.json";


LogBox.ignoreAllLogs(true);

const Product = () => {
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
      cat == "all"
        ? [getproduct(intial), setact(true)]
        : [
            getproduct(
              products.filter((i) => i.category_id === cat),
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
      
       <View>
     
       </View>
       {productt.length > 0 ? (
       <View style={styles.flatlist}>
               <Banner/>
          
          <Search/>
             <Categories
   cat={cat}
   Categories={changecat}
   productt={productt}
   active={active}
   setact={setact}

 />
         
           <View style={{flexDirection:"row", flexWrap:"wrap", backgroundColor:"gainsboro"}}>
           {productt.map((item) => {
               return(
                   <Productlist
                      
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

const styles = StyleSheet.create({
  products: {
    alignItems: "center",
    backgroundColor: "lavender",
  },
  flatlist: {},
});
export default Product;
