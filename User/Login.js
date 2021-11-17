import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button ,TouchableOpacity,Dimensions} from "react-native";
import FormContainer from "../Form/FormContainer";
import Input from "../Form/Input";
import Error from "./Error"
import Toast from "react-native-toast-message";
var width=Dimensions.get("window")





const Login = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

 
  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credentials");
    } else {
      Toast.show({
        topOffset: 60,
        type: "success",
        text1: "All correct Succeeded",
        
      });
    }
  };

  return (
    <FormContainer title={"Login"}>
      <Input
        placeholder={"Enter Email"}
        name={"email"}
        id={"email"}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={"Enter Password"}
        name={"password"}
        id={"password"}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View >
      {error ? <Error message={error} /> : null}
      <View style={{backgroundColor:"orange",width:325,height:40, alignItems:"center",marginTop:10, borderRadius:4}}>
      <TouchableOpacity onPress={() => handleSubmit()}><Text style={{alignSelf:"center",top:8,fontWeight:"bold", }}>Login</Text></TouchableOpacity>
        
      </View>

       
     

      </View>
      <Text style={styles.middleText}>Don't have an account yet?</Text>
      <View style={{backgroundColor:"orange",width:325,height:40, alignItems:"center",marginTop:10, marginTop: 40 ,borderRadius:4}}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register")}><Text style={{alignSelf:"center",top:8,fontWeight:"bold", }}>Sign up</Text></TouchableOpacity>
        
      
        
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default Login;
