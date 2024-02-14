import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import fruitsimg from "../../../images/cab.png"
import vegesimg from "../../../images/img1.jpg"
import dairyimg from "../../../images/Dairy.png"
import proteinimg from "../../../images/Protein.png"
import grainimg from "../../../images/Grains.png"


export default function Travel() {
    const data = [
        {
            id: 1,
            img:fruitsimg ,
            title: "Cab"
        },
        {
            id: 2,
            img:vegesimg,
            title: "Veg"
        },
        {
            id: 3,
            img: grainimg,
            title: "Grains"
        },
        {
            id: 4,
            img: proteinimg,
            title: "Protein"
        },
        {
            id: 5,
            img: dairyimg,
            title: "Dairy"
        },
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <Icon name="cab" size={25} color={"#fff"} />
                        <Text style={[mystyle.text]}>Travel</Text>
                    </TouchableOpacity>
                </View>
                <View style={[mystyle.box, { justifyContent:'flex-start',
                 flexDirection: 'row',gap:5,marginLeft:30 ,flexWrap:'wrap'}]}>
                    {
                        data.map((item) => (
                            <TouchableOpacity style={[mystyle.item]} key={item.id}>
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
        width: 60,
        marginTop:10,
    }
})
