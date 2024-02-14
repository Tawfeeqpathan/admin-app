import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/Fontisto';
import eleimg from "../../../images/electronic.png"
import appaimg from "../../../images/apparel.png"
import accesinimg from "../../../images/accessories.png"
import cosimg from "../../../images/cosmetic.png"
import toyimg from "../../../images/toys.png"
export default function Shoping() {
    const data = [
        {
            id: 1,
            img:eleimg ,
            title: "Electronic"
        },
        {
            id: 2,
            img:appaimg,
            title: "  Apparel"
        },
        {
            id: 3,
            img: accesinimg,
            title: "Accessories"
        },
        {
            id: 4,
            img: cosimg,
            title: "Cosmetic"
        },
        {
            id: 5,
            img: toyimg,
            title: "     Toys"
        },
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <Icon name="shopping-bag-1" size={25} color={"#fff"} />
                        <Text style={[mystyle.text]}>Shoping</Text>
                    </TouchableOpacity>
                </View>
                <View style={[mystyle.box, { justifyContent:'flex-start',
                 flexDirection: 'row',gap:5,marginLeft:30 ,flexWrap:'wrap'}]}>
                    {
                        data.map((item) => (
                            <TouchableOpacity style={[mystyle.item]} key={item.id}>
                                <Image source={item.img} style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="contain" />
                                <Text style={[mystyle.box,{ color: '#fff',paddingLeft:0,fontSize:12 }]}>{item.title}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}
const mystyle = StyleSheet.create({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 600
    },
    item: {
        borderRadius: 50,
        width: 70,
        marginTop:10,
    }
})
