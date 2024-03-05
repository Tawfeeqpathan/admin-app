import React from 'react'
import { SafeAreaView, Text, Dimensions, TouchableOpacity, View, StyleSheet } from 'react-native'
import Search from '../components/Search'
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { FlashList } from '@shopify/flash-list'
import { useNavigation } from '@react-navigation/native'
export default function Transaction() {
    const ScreenHeight = Dimensions.get('screen').height
    const naviagtion = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: 'black', paddingTop: 10 }}>
            <View style={mystyle.box}>
                <Search />
            </View>
            <View style={[{ height: ScreenHeight - 150 }]}>

                <FlashList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    renderItem={({ item }) => (
                        <View style={[mystyle.box, { gap: 20 }]}>
                            <TouchableOpacity style={[mystyle.box, mystyle.item]} onPress={() => naviagtion.navigate("transactionDetail")}>
                              <View style={[mystyle.box,{flexDirection:'row',gap:60}]}>
                              <View style={[mystyle.box]}>
                                    <Text style={mystyle.text}>payer</Text>
                                    <Text style={mystyle.text}>payee</Text>
                                    <Text style={[mystyle.text,{color:'#4285F4'}]}>Amount:</Text>
                                </View>
                                <View style={[mystyle.box]}>
                                    <Text style={mystyle.text}>testuser</Text>
                                    <Text style={mystyle.text}>fitnessgym</Text>
                                    <Text style={[mystyle.text]}>35</Text>
                                </View>
                                
                              </View>
      
                                <View style={[mystyle.box, { flexDirection: 'row', gap: 10 }]}>
                                    <View style={[mystyle.box,{flexDirection:'row'}]}>
                                    <IonIcon name={'calendar'} size={20} color={'#4285F4'} />
                                    <Text style={mystyle.text}>today</Text>
                                    </View>
                                    <View style={[mystyle.box,{flexDirection:'row'}]}>
                                    <IonIcon name={'time'} size={20} color={'#4285F4'} />
                                    <Text style={mystyle.text}>12:00 pm</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    estimatedItemSize={200}
                    keyExtractor={item => item.toString()}
                    numColumns={1}
                />


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

    },
    item: {
        marginBottom: 10,
        width: 350,
        height: 130,
        backgroundColor: '#fa8200',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#fff',
        gap: 6
    },
    headtext: {
        borderBottomColor: '#1134A6',
        borderBottomWidth: 2,
        fontSize: 25,
        color: '#1134A6'
    }
})

