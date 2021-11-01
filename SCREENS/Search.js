import React, { useState, useEffect } from 'react';

// import 
import { SafeAreaView, Text, StyleSheet, View, FlatList,Dimensions,Image, Button} from 'react-native';
import { SearchBar,Card,ListItem, Avatar } from 'react-native-elements';
import {AntDesign} from "@expo/vector-icons"
var { width } = Dimensions.get("window");
const Data=require('../assets/Data.json');
import Productlist from '../PRODUCTS/Productlist';
import Searchdesignlist from "./Searchdesignlist"


const Search = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setfilter] = useState([]);
  const [sources, datasource] = useState([]);


  

  useEffect(() => {



    
    

        setfilter(Data);
        datasource(Data);
        
       
     
        return ()=>{
            setfilter([]);
      

        }
      
          },
          []
      
          )

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the sources
      // Update filteredData
      const newData = sources.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilter(newData);
      setSearch(text);
    }
   
    else {
    
      // Update filteredData with sources
      setfilter(sources);
      setSearch(text);
    }
  };
  const openList = () => {
    datasource(true);
  };

  const onBlur = () => {
    datasource(false);
  };

  const ItemView = () => {
    return (
        <FlatList
         
            numColumns={2}
                 data={filteredData}
                 renderItem={({item})=>< Searchdesignlist key={item.id}
                item={item}/>}
                 keyExtractor={item=>item.name}/>
    )
  
        
  };
 

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' name : ' + item.name);
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <SearchBar
    round
    searchIcon={{ size: 24 }}
    onChangeText={(text) => searchFilterFunction(text)}
    onClear={(text) => searchFilterFunction('')}
    placeholder="Type Here..."
    value={search}
   
  
    containerStyle={{ width:width-20,  backgroundColor: 'gainboron', borderRadius: 1 }}
    inputContainerStyle={{backgroundColor:"white" ,borderBottomColor:"white"}}
   />
      <View style={styles.products}>
              <FlatList
        data={search}
       
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={
          ItemView
      }  
      />
    
        </View>
      
    
    
  

           </View>
        
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom:80
  },
  itemStyle: {
    padding: 10
  },
});

export default Search;
