import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import img from "../../../images/logo.png"
export default function Search() {
    return (
        <SafeAreaView style={{ marginBottom: 20 }}>
            <View style={[mystyle.box,{flexDirection:'row'}]}>
                <View style={[mystyle.box, { flexDirection: 'row', marginLeft: 10 ,width:270}]}>
                    <TextInput
                        placeholder='search... '
                        style={[mystyle.input]}
                    />
                    <View style={{ marginLeft: -240 }}>
                        <Icon name="search" size={20} color={'black'} />
                    </View>
                </View>
                <View style={[mystyle.mjcoin]} >
                    <View style={[mystyle.coin,{width: 30, height: 30} ]}>
                        <Image source={img} style={{ width: 25, height: 25 }} />
                    </View>
                    <View>
                        <Text style={{ color: '#fff' }}>Mj coin</Text>
                        <Text style={{ color: '#fff', marginLeft: 20 }}>0</Text>
                    </View>

                </View>
                <View style={{marginLeft:8}}>
                    <Icon name="shopping-cart" size={25} color={"#fff"}/>
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
        width: 260,
        height: 40,
        backgroundColor: '#fff',
        color: 'black',
        paddingLeft: 50,
        borderRadius:8,
    },
    mjcoin: {
        backgroundColor: '#2A2623',
        borderRadius:8,
        width: 90,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap:2,
        elevation:90,
        shadowColor: 'red',
    },
    coin: {
        width: 30,
        height: 30,
        padding:1,
        borderRadius:20,
        borderWidth:2,
        backgroundColor:"orange",
        borderColor:'yellow'
    }
})