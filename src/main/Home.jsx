import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CategoryIcon, CategoryOutline } from './navigation/CategoryIcon';
import Carousel from './components/Carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../images/logo.png"
import Search from './components/Search';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:'black'}}>
      <ScrollView>
        <View style={[mystyle.box,{flexDirection:'row',margin:20}]}>
       <View style={{width:50}}>
        <Image source={logo} style={{width:50,height:50}} />
       </View>
       <View style={[mystyle.box,{flexDirection:'row',gap:4}]}>
       <Icon name="user-o" size={30} color={'#fff'}/>
       <View style={{marginTop:-30}}>
       <MaterialIcons name="notifications" size={25} color={'#fff'}/>
       </View>
       </View>
        </View>
        <View style={[{flexDirection:'row',width:200,marginBottom:10,marginLeft:5}]}>
        <Entypo name="location-pin" size={25} color={'#fff'}/>
        <Text style={[mystyle.text]}>kashmir, srinagar</Text>
        </View>
        <Search/>
        <View>
        <Carousel/>
        </View>
  
      </ScrollView>
    </SafeAreaView>
  )
}

const mystyle = StyleSheet.create({
  box:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  text:{
    color:'#fff',
    fontSize:20
  }
})