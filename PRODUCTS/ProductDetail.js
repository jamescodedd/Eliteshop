import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, Text, ScrollView, Button,Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Left, Right, Container, H1, NativeBaseProvider } from 'native-base';
import Swiper from "react-native-swiper/src";
import { marginBottom } from 'styled-system';

var { width } = Dimensions.get("window");



const ProductDetail = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const  [availability, setAvailability]=useState('')
  
   
  

    return (
     
        
            <ScrollView style={{ padding: 5 }}>
            
                <View style={styles.container}>
                    <View style={styles.swiper}>
                <Swiper
            style={{ height: width/2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={4}
          >
                   <Image 
                        source={{
                            uri: item.image 
                        
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    <Image 
                        source={{
                            uri: item.color 
                        
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    <Image 
                        source={{
                            uri: item.alt 
                        
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />

            
              
        
          </Swiper>
          </View>




               
               </View>

               <ListItem>

               <ListItem.Content>
                <ListItem.Title style={{fontSize:19,fontStyle:"bold"}}><Text style={{fontWeight:"bold", fontSize:23}}> Name:</Text>
                  {item.name}
                </ListItem.Title>
                <View style={{marginBottom:10,}}></View>
                <ListItem.Title style={{marginBottom:20}}>
                 <Text style={{fontsize:40, fontWeight:"bold",marginBottom:25}}>Price : GHC {item.price}</Text> <Text style={{color:"red", fontSize:12}}> {item.discount}% discount off</Text></ListItem.Title> 
                 
                <ListItem.Subtitle
                
                style={{textShadowColor:'black'}}><Text style={{fontSize:20,fontWeight:"bold"}}>Product description: </Text> {item.description}</ListItem.Subtitle>
                 


               </ListItem.Content>
             
                </ListItem>
             

               
               </ScrollView>
     
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
      },
      swiper: {
        width: width,
        alignItems: "center",
        marginTop: 10,
      },
      image: {
        height: width / 2.5,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
      },
    
    }
)

export default ProductDetail;