import React, { useState } from 'react'
import {  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default function Search() {
    const [searchValue,setSearchValue] = useState('')
    const handleSearch= (text)=>{
          setSearchValue(text)
    }
    return (
        <SafeAreaView style={{ marginBottom: 20 }}>
            <View style={[mystyle.box,{flexDirection:'row'}]}>
                <View style={[mystyle.box, { flexDirection: 'row'}]}>
                <View>
                <View style={{display:'flex',position:'absolute',zIndex:20,padding:10}}>
                        <Icon name="search" size={20} color={'black'} />
                    </View> 
                     <TextInput
                     placeholder='Search...'
                      value={searchValue}
                        style={[mystyle.input,{position:'relative',zIndex:10}]}
                        onChangeText={(text)=>handleSearch(text)}
                    />
                </View>
                <View style={{marginLeft:10}}>
                    <TouchableOpacity>
                    <Icon name="filter" size={30} color={'#fff'} />
                    </TouchableOpacity>
                </View>
                   
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
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        color: 'black',
        paddingLeft: 40,
        borderRadius:8,
    },
    // mjcoin: {
    //     backgroundColor: '#312B35',
    //     width: 65,
    //     borderRadius:8,
    //     height: 40,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexDirection: 'row',
    //     gap:1,
    //     elevation:9,
    //     shadowColor: 'gray',
    // },
    // coin: {
    //     width: 50,
    //     height: 50,
    //     borderRadius:20,  
    // }
})