import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import img from "../../../images/coin.png"
import Anitext from './Anitext';
export default function Search() {
    const [searchValue,setSearchValue] = useState('')
    const handleSearch= (text)=>{
          setSearchValue(text)
    }
    return (
        <SafeAreaView style={{ marginBottom: 20 }}>
            <View style={[mystyle.box,{flexDirection:'row',gap:5}]}>
                <View style={[mystyle.box, { flexDirection: 'row', marginLeft: 10 ,width:270}]}>
                   {
                    searchValue.trim()==''?(<View style={{position:'absolute',zIndex:20,marginLeft:50}}>
                    <Anitext/>
                    </View>):null
                   }
                    <TextInput
                      value={searchValue}
                        style={[mystyle.input]}
                        onChangeText={(text)=>handleSearch(text)}
                    />
                    <View style={{ marginLeft: -250 }}>
                        <Icon name="search" size={20} color={'black'} />
                    </View>
                </View>
                <View style={[mystyle.mjcoin]} >
                    <View style={[mystyle.coin,{width: 40, height: 40} ]}>
                        <Image source={img} style={{ width: 40, height: 40}} />
                    </View>
                    <View>
                        <Text style={{ color: '#fff', marginLeft:5 }}>0</Text>
                    </View>

                </View>
                <View style={{marginLeft:5}}>
                   <TouchableOpacity>
                   <MIcon name="cart-variant" size={40} color={"#fff"}/>
                   </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
const mystyle = StyleSheet.create({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'centre'
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    input: {
        width: 270,
        height: 40,
        backgroundColor: '#fff',
        color: 'black',
        paddingLeft: 50,
        borderRadius:8,
    },
    mjcoin: {
        backgroundColor: '#312B35',
        width: 65,
        borderRadius:8,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap:1,
        elevation:9,
        shadowColor: 'gray',
    },
    coin: {
        width: 50,
        height: 50,
        borderRadius:20,  
    }
})