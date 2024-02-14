import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CategoryIcon, CategoryOutline } from './navigation/CategoryIcon';
import Carousel from './components/Carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../images/logo.png"
import Search from './components/Search';
import Shoping from './shoping/Shoping';
import Food from './food/Food';
import Services from './services/Services';
import Fitness from './fitness/Fitness';
import Travel from './travel/Travel';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:'black'}}>
      <ScrollView>
        <View style={[mystyle.box,{flexDirection:'row',margin:20}]}>
       <View>
        <Image source={logo} style={{width:50,height:50}} resizeMode="contain"  />
       </View>
       <View style={[mystyle.box,{flexDirection:'row',gap:4}]}>
       <TouchableOpacity>
       <Icon name="user-o" size={30} color={'#fff'}/>
       </TouchableOpacity>
       <View style={{marginTop:-30}}>
     <TouchableOpacity>
     <MaterialIcons name="notifications" size={25} color={'#fff'}/>
     </TouchableOpacity>
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
        <View>
          <Shoping/>
        </View>
        <View>
        <Food/>
        </View>
        <View>
        <Services/>
        </View>
        <View>
    <Travel/>
        </View>
        <View>
        <Fitness/>
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