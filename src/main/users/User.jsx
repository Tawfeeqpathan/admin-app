import React from 'react'
import { SafeAreaView, Text, Dimensions, TouchableOpacity, View, StyleSheet } from 'react-native'
import Search from '../components/Search'
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { FlashList } from '@shopify/flash-list'
import { useNavigation } from '@react-navigation/native'
export default function Users() {
  const ScreenHeight = Dimensions.get('screen').height
  const naviagtion = useNavigation()
  return (
    <SafeAreaView style={{ backgroundColor: 'black', paddingTop: 10 }}>
      <View style={mystyle.box}>
        <Search />
      </View>
      <View style={[{ height: ScreenHeight - 150 }]}>

        <FlashList
          data={[1, 2, 3, 4, 5, 6,7,8,9,10,11,12]}
          renderItem={({ item }) => (
            <View style={[mystyle.box,{gap:20}]}>
              <TouchableOpacity style={[mystyle.box, mystyle.item]} onPress={()=>naviagtion.navigate("userDetail")}>
                <View style={[mystyle.box, { flexDirection: 'row', justifyContent: 'space-between', gap: 10 }]}>
                  <Text style={mystyle.text}>tawfeeq ah khan</Text>
                  <View style={[mystyle.box,{flexDirection:'row'}]}>
                  <IonIcon name={'call'} size={20} color={'#4285F4'} />
                  <Text style={[mystyle.text]}> 1234567890</Text>
                  </View>
                </View>
                <View style={[mystyle.box,{flexDirection:'row'}]}>
                <IonIcon name={'mail'} size={20} color={'#4285F4'} />
                <Text style={[mystyle.text]}>tawfeeqpayhan3@gmail.com</Text>
                </View>
                <View style={[mystyle.box, { flexDirection: 'row', justifyContent: 'space-between', gap:10 }]}>
                  <Text style={[mystyle.text,{color:'#4285F4'}]}>Date of Joining</Text>
                  <Text style={mystyle.text}>12/12/2022</Text>
                </View>
                <View style={[mystyle.box, { flexDirection: 'row',justifyContent:'space-between',gap: 20 }]}>
                                <Text style={[mystyle.text,{color:'#4285F4'}]}>Wallet Blance:</Text>
                                <Text style={[mystyle.text]}>1200 cions</Text>
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
    height: 140,
    backgroundColor: '#fa8200',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#fff',
    gap:6
  },
  headtext: {
    borderBottomColor: '#1134A6',
    borderBottomWidth: 2,
    fontSize: 25,
    color: '#1134A6'
  }
})
