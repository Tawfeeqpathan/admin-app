
import React from 'react'
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
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
    {
        id:5,
        title:"TRANSITIONS"
    },
    {
        id:6,
        title:"ACTIVITIES"
    },
] 
  return (
    <View style={[mystyle.box,{flexDirection:'row',flexWrap:'wrap',gap:20}]}>
   {
       data.map((item)=>(
        <TouchableOpacity style={[mystyle.title,mystyle.box]}>
            <Icon name={'user'} size={40} color={'blue'} />
            <Text style={[mystyle.text]}>{item.title}</Text>
            <Text style={[mystyle.text]}>546</Text>
        </TouchableOpacity>
      ))
   }
    </View>
  )
}
const mystyle = StyleSheet.create({
    box:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
       
    },
    title:{
        width:150,
        height:150,
        backgroundColor:'#fa8200',
        elevation:5,
        borderRadius:12
    },
    text:{
        color:'#fff',
        fontSize:20
    }
})
