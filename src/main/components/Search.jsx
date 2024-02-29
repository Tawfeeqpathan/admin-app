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
                   <View style={{ paddingRight:10}}>
                        <Icon name="search" size={20} color={'#fff'} />
                    </View> 
                     <TextInput
                     placeholder='Search...'
                      value={searchValue}
                        style={[mystyle.input]}
                        onChangeText={(text)=>handleSearch(text)}
                    />
                   
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
        width: 350,
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