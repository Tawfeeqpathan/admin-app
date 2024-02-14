import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MIcon from 'react-native-vector-icons/dist/MaterialIcons';
import gymimg from "../../../images/gym.png"
import supimg from "../../../images/supplement.png"
import deitimg from "../../../images/diets.png"
import goalimg from "../../../images/goal.png"
export default function Fitness() {
    const data = [
        {
            id: 1,
            img:gymimg,
            title: "Gym"
        },
        {
            id: 2,
            img:supimg,
            title: "Supple"
        },
        {
            id: 3,
            img:deitimg,
            title: "Diet"
        },
        {
            id: 4,
            img: goalimg,
            title: "Goal"
        },
    ]
    return (
        <SafeAreaView>
            <View>
                <View style={[mystyle.box, { justifyContent:'flex-start', flexDirection: "row", marginTop: 20, marginLeft: 20 }]}>
                    <TouchableOpacity style={[mystyle.box, { flexDirection: 'row', gap: 6 }]}>
                        <MIcon name="fitness-center" size={25} color={"#fff"} />
                        <Text style={[mystyle.text]}>Fitness</Text>
                    </TouchableOpacity>
                </View>
                <View style={[mystyle.box, { justifyContent:'flex-start',
                 flexDirection: 'row',gap:10,marginLeft:30 ,flexWrap:'wrap'}]}>
                    {
                        data.map((item) => (
                            <TouchableOpacity style={[mystyle.box,mystyle.item]} key={item.id}>
                                <Image source={item.img} style={{ width: 40, height: 40, borderRadius: 50 }} resizeMode="contain" />
                                <Text style={[mystyle.box,{ color: '#fff',paddingLeft:10 }]}>{item.title}</Text>
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
        fontSize: 25,
        fontWeight: 700
    },
    item: {
        borderRadius: 50,
        width: 70,
        marginTop:10,
    }
})
