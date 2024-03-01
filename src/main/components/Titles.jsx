
import React from 'react'
import { TouchableOpacity,View,Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native'
export default function Title() {
    const navigation = useNavigation()
    const data = [{
        id:1,
        title:"PLANS",
        icon:"window-restore",
        path:"plans"
    },
    {
        id:2,
        title:"USERS",
        icon:"users",
        path:"plans"
    },
    {
        id:3,
        title:"GYMS",
        icon:"sitemap",
        path:"plans"
    },
    {
        id:4,
        title:"PRODUCTS",
        icon:"product-hunt",
        path:"plans"
    },
    {
        id:5,
        title:"TRANSITIONS",
        icon:"rupee",
        path:"plans"
    },
    {
        id:6,
        title:"TODAY DATA",
        icon:"calendar",
        path:"plans"
    },
] 
  return (
    <View style={[mystyle.box,{flexDirection:'row',flexWrap:'wrap',gap:20,paddingBottom:10}]}>
   {
       data.map((item)=>(
        <TouchableOpacity style={[mystyle.title,mystyle.box]} key={item.id} onPress={()=>navigation.navigate(item.path)}>
            <Icon name={item.icon} size={40} color={'#1134A6'} />
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
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 10,
        borderRadius:12,
        
    },
    text:{
        color:'#fff',
        fontSize:20
    }
})