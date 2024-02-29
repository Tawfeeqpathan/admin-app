import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native'

export default function Title() {
    const data = [{
        id:1,
        title:"PLANS"
    },
    {
        id:2,
        title:"USERS"
    },
    {
        id:3,
        title:"GYMS"
    },
    {
        id:4,
        title:"PRODUCTS"
    },
] 
  return (
    <View style={[mystyle.box,{height:60}]}>
        <FlashList
  data={data}
  renderItem={({item})=>(
    <TouchableOpacity style={[mystyle.title,mystyle.box,{margin:5}]}>
        <Text style={{color:'#fff'}}>{item.title}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={item=>item.id.toString()}
  estimatedItemSize={100}
  horizontal={true}
  />
    </View>
  )
}
const mystyle = StyleSheet.create({
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        width:100,
        height:40,
        backgroundColor:'#fa8200',
    }
})
