import React from 'react'
import { View ,StyleSheet, Text, TouchableOpacity,ScrollView ,Dimensions} from 'react-native'
import { Avatar, ListItem, makeStyles} from "react-native-elements"
import { Badge,NativeBaseProvider} from "native-base"
var {width}=Dimensions.get("window")




const Categories = (props) => {

    return(
        <ScrollView
            bounces={true}
            horizontal={true}
            style={{ backgroundColor: "#f2f2f2" }}
        >
            <ListItem style={{alignContent:"center", margin: 0, padding: 0, borderRadius: 0 }}>
                <TouchableOpacity
                    key={0}
                    onPress={() => {
                        props.Categories('ALL'), props.setact(-1)
                    }}
                ><NativeBaseProvider><Badge
                style={[styles.center, {margin: 5},
                    props.active == -1 ? styles.active : styles.inactive
                ]}
            >
                <Text style={{ color: 'white', fontWeight:"bold" }}>All</Text>
            </Badge></NativeBaseProvider>
                    
                </TouchableOpacity>
                {props.cat.map((item) => (
                      <TouchableOpacity
                      key={item._id}
                      onPress={() => {
                          props.Categories(item._id), 
                          props.setact(props.cat.indexOf(item))
                      }}
                  ><NativeBaseProvider>
                      <Badge
                          style={[styles.center, 
                            {margin: 5},
                            props.active == props.cat.indexOf(item) ? styles.active : styles.inactive
                          ]}
                      >
                          <Text style={{ color: 'white' ,fontWeight:"bold" }}>{item.name}</Text>
                      </Badge>
                  </NativeBaseProvider>
                      
                  </TouchableOpacity>
                ))}
            </ListItem>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height:30,
        width:width/5
    },
    active: {
        backgroundColor: '#03bafc'
    },
    inactive: {
        backgroundColor: '#a0e1eb'
    }
})

export default Categories;