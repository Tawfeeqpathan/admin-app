import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';
import logo from "../../../images/logo.png"
import Search, { SearchBar } from '../components/Search';
import FastImage from 'react-native-fast-image';
// <Image source={logo} style={{ width: 50, height: 50 }} resizeMode="contain"/>
export default function Header() {
  const logoUri = Image.resolveAssetSource(logo).uri;
  return (
    <SafeAreaView>
      <View style={[mystyle.box, { flexDirection: 'row', margin:20}]}>
        <View>
        <Image source={logo} style={{ width: 50, height: 50 }} resizeMode="contain"/>
        {/* <FastImage
        style={{ width: 50, height: 50 }}
        source={{
            uri:logoUri,  
            priority: FastImage.priority.high,
        }}
        
    /> */}

        </View>
        <View style={[mystyle.box, { flexDirection: 'row', gap: 4 }]}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={33} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="user-o" size={30} color={'#fff'} />
          </TouchableOpacity>

        </View>
      </View>
      {/* <View style={[{ flexDirection: 'row', width: 200, marginBottom: 5, marginLeft: 5 }]}>
        <Entypo name="location-pin" size={22} color={'#fff'} />
        <Text style={{ fontSize: 15, color: '#fff' }}>kashmir,</Text>
        <Text style={{ fontSize: 15, color: '#B805DC' }}> 190001</Text>
      </View> */}
    </SafeAreaView>
  )
}
const mystyle = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  text: {
    color: '#fff',
    fontSize: 20
  }
})