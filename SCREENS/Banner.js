import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

var { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerdata,setdata]=useState([]);

  const image=[
      {image: require('../assets/banner1.jpeg')
    ,name:"new promotion !!"
}
      ,{
          image:require('../assets/banner2.jpeg'
          )
          ,name:"dffdf"
      },{image:require('../assets/banner3.jpeg')},
      {
image:require('../assets/banner5.jpeg')
      }

  ]

  


useEffect(()=>{
    setdata(image)
    return ()=>{
        setdata([])
    }
    
     
} ,[])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2.5 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerdata.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="cover"
                  source={item.image }
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2.5,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
