import React from 'react'
import { SafeAreaView,Text,Dimensions, TouchableOpacity, View ,StyleSheet} from 'react-native'
import Search from '../components/Search'
import {FlashList} from '@shopify/flash-list'
export default function Plans() {
  const ScreenHeight = Dimensions.get('screen').height
  return (
   <SafeAreaView style={{backgroundColor:'black',paddingTop:10}}>
    <Search/>
    <View style={[{height:ScreenHeight-150}]}>
      
      <FlashList
      data={[1,2,3,4,5,6]}
      renderItem={({item})=>(
        <TouchableOpacity style={[mystyle.box,mystyle.item]}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
      estimatedItemSize={200}
      keyExtractor={item=>item.toString()}
      numColumns={2}
      />

      
    </View>
   </SafeAreaView>
  )
}

const mystyle = StyleSheet.create({
  box:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'#fff',
    fontSize:20

  },
  item:{
    margin:10,
    width:150,
    height:200,
    backgroundColor:'#fa8200',
    borderRadius:10
  }
})
