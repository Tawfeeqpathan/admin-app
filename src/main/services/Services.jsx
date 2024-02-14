import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Eimg from "../../../images/Erepair.png"
import Simg from "../../../images/salon.png"
import Pbimg from "../../../images/plumber.png"
import ptimg from "../../../images/painter.png"


export default function Services() {
    const data = [
        {
            id: 1,
            img:Eimg ,
            title: "E-repair"
        },
        {
            id: 2,
            img:Simg,
            title: "Salon"
        },
        {
            id: 3,
            img: Pbimg,
            title: "Plumber"
        },
        {
            id: 4,
            img: ptimg,
            title: "Painter"
        },
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <Icon name="customerservice" size={25} color={"#fff"} />
                        <Text style={[mystyle.text]}>Services</Text>
                    </TouchableOpacity>
                </View>
                <View style={[mystyle.box, { justifyContent:'flex-start',
                 flexDirection: 'row',gap:5,marginLeft:30 ,flexWrap:'wrap'}]}>
                    {
                        data.map((item) => (
                            <TouchableOpacity style={[mystyle.box,mystyle.item]} key={item.id}>
                                <Image source={item.img} style={{ width: 50, height: 50, borderRadius: 50 }} resizeMode="contain" />
                                <Text style={{ color: '#fff',paddingLeft:10 }}>{item.title}</Text>
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
