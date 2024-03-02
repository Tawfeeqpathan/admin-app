import React, { useState } from 'react';
import { Image, ScrollView,DimensionValue, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../images/logo.png";
export default function Login({ navigation }) {
  const [password, setPassword] = useState('');
const [numemail, setNumemail] = useState('');
const handleInputChange = (text,fieldName)=>{
  if(fieldName=="password"){
    setPassword(text)
  }
  if(fieldName=="numemail"){
    setNumemail(text)
  }
}
const handleSubmit = () => {
  if (numemail.trim() == '') {
    alert('Please enter the email or number');
    return;
  }
  if (password.trim() == '') {
    alert('Please enter the password');
    return;
  }
navigation.navigate("main")
};
const screenHeight= Dimensions.get('screen').height
  return (
    <SafeAreaView style={{ backgroundColor: 'black',height:screenHeight}} >
      <ScrollView >
        <View style={[mystyle.box, { height: 680, borderWidth: 2, flexDirection: "column", gap: 40 }]}>
          <View >
            <Image source={logo}  style={{ width: 160, height: 160 }} resizeMode="contain"/>
          </View>
          <View style={[mystyle.box, { gap: 20 }]}>
            <View>
              <View style={[mystyle.lable]}>
                <Text style={mystyle.text}>Email or Number</Text>
              </View>
              <View>
                <TextInput
                name="numemail"
                  style={[mystyle.input, mystyle.text]}
                  placeholder='john'
                  onChangeText={(text)=>handleInputChange(text,"numemail")}
                  value={numemail}
                />
              </View>
            </View>
            <View>
              <View style={[mystyle.lable]}>
                <Text style={mystyle.text}>Password</Text>
              </View>
              <View>
                <TextInput
                name="password"
                  style={[mystyle.input, mystyle.text]}
                  placeholder='john'
                  secureTextEntry
                  onChangeText={(text)=>handleInputChange(text,"password")}
                  value={password}
                />
              </View>

            </View>
            <TouchableHighlight style={[mystyle.button,mystyle.box]} onPress={ handleSubmit}>
              <Text style={[mystyle.text,{fontSize:25}]}>Log in</Text>
            </TouchableHighlight>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const mystyle = StyleSheet.create({
  box: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    paddingLeft:20,
    borderWidth: 2,
    borderColor: "#fa8200",
    width: 350,
    height: 60,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 17
  },
  lable: {
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: "black",
    marginLeft: 20,
    marginBottom: -7,
    position: "relative",
    zIndex: 10,
    alignSelf: 'flex-start',
  },
  button:{
    borderWidth: 2,
   backgroundColor: "#fa8200",
   color:"#fff",
    width: 350,
    height: 60,
    borderRadius: 10,
  }

})
