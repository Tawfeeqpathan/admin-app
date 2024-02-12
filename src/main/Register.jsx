import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../images/logo.png";
export default function Register({ navigation }) {
  const [fullname,setFullname] = useState('')
  const [number,setNumber] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [otp,setOtp] = useState('')
const handleInputChange = (text,fieldName)=>{
if(fieldName=="fullname"){
  setFullname(text)
}
if(fieldName=="number"){
  setNumber(text)
}
if(fieldName=="email"){
  setEmail(text)
}
if(fieldName=="password"){
  setPassword(text)
}
if(fieldName=="confirmPassword"){
  setConfirmPassword(text)
}
if(fieldName=="otp"){
  setOtp(text)
}
}

const handleSubmit = () => {
  if(password === confirmPassword){
    if (fullname.trim() == '') {
      alert('Please enter  fullname');
      return;
    }
    if (number.trim() == '') {
      alert('Please enter number');
      return;
    }
    if (email.trim() == '') {
      alert('Please enter email');
      return;
    }
    if (password.trim() == '') {
      alert('Please enter password');
      return;
    }
    if (otp.trim() == '') {
      alert('Please enter otp');
      return;
    }
    console.warn(password)
  }else{
    console.warn("password are not same")
  }

};



  return (
    <SafeAreaView style={{ backgroundColor: 'black' }} >
      <ScrollView >
        <View style={[mystyle.box, { height: 800, borderWidth: 2, flexDirection: "column", gap: 15 }]}>
          <View >
            <Image source={logo} style={{ width: 170, height: 170 }} resizeMode="contain" />
          </View>
          <View style={[mystyle.box, { gap: 5 }]}>
            <View>
              <View style={[mystyle.lable]}>
                <Text style={mystyle.text}>Full Name</Text>
              </View>
              <View>
                <TextInput
                  style={[mystyle.input, mystyle.text]}
                  placeholder='john'
                  onChangeText={(text)=>handleInputChange(text,"fullname")}
                  value={fullname}
                />
              </View>
            </View>
            <View>
              <View style={[mystyle.lable]}>
                <Text style={mystyle.text}>Number</Text>
              </View>
              <View>
                <TextInput
                  style={[mystyle.input, mystyle.text]}
                  placeholder='john'
                  onChangeText={(text)=>handleInputChange(text,"number")}
                  value={number}
                />
              </View>
            </View>
            <View>
              <View style={[mystyle.lable]}>
                <Text style={mystyle.text}>Email</Text>
              </View>
              <View>
                <TextInput
                  style={[mystyle.input, mystyle.text]}
                  placeholder='john'
                  onChangeText={(text)=>handleInputChange(text,"email")}
                  value={email}

                />
              </View>

            </View>
            <View style={[mystyle.box,{flexDirection:'row',gap:10}]}>
              <View>
              <View style={[mystyle.lable]}>
                <Text style={mystyle.text}>Password</Text>
              </View>
              <View>
                <TextInput
                  style={[mystyle.input, mystyle.text,{width:170}]}
                  placeholder='john'
                  secureTextEntry
                  onChangeText={(text)=>handleInputChange(text,"password")}
                  value={password}
                />
              </View>
              </View>
             
              <View>
              <View style={[mystyle.lable,{marginLeft:6}]}>
                <Text style={mystyle.text}>Confirm password</Text>
              </View>
              <View>
                <TextInput
                  style={[mystyle.input, mystyle.text,{width:170}]}
                  placeholder='john'
                  onChangeText={(text)=>handleInputChange(text,"confirmPassword")}
                  value={confirmPassword}
                />
              </View>
              </View>

            </View>
            <View style={[mystyle.box,{flexDirection:'row',gap:10}]}>
              <View>
              <View style={[mystyle.lable]}>
                <Text style={mystyle.text}>OTP</Text>
              </View>
              <View>
                <TextInput
                  style={[mystyle.input, mystyle.text,{width:170}]}
                  placeholder='john'
                  onChangeText={(text)=>handleInputChange(text,"otp")}
                  value={otp}
                />
              </View>
              </View>
             
              <View>
            
            <TouchableOpacity style={[mystyle.box,mystyle.otpbtn]}>
              <Text style={[mystyle.text]}>Get OTP</Text>
            </TouchableOpacity>
              </View>

            </View>
            <TouchableHighlight style={[mystyle.button, mystyle.box]} onPress={handleSubmit}>
              <Text style={[mystyle.text, { fontSize: 25 }]}>Register</Text>

            </TouchableHighlight>
          </View>
          <View style={[mystyle.box, { flexDirection: 'row' }]}>
            <Text style={[mystyle.text]}>
              Create a new account ?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
            >
              <Text style={{ color: '#0066c0', alignSelf: 'flex-start', marginLeft: 10, fontSize: 20, paddingLeft: 20 }}>Sign in</Text>
            </TouchableOpacity>
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
    paddingLeft: 20,
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
  button: {
    marginTop:5,
    borderWidth: 2,
    backgroundColor: "#fa8200",
    color: "#fff",
    width: 350,
    height: 60,
    borderRadius: 10,
  },
  otpbtn:{
    marginTop:13,
    backgroundColor:"#0066c0",
    width:170,
    height:60,
    borderRadius:10,
  }

})

