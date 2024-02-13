import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IonIcon from 'react-native-vector-icons/dist/Ionicons';
export  function CategoryIcon() {
  return (
    <SafeAreaView>
        <View style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
           <View>
           <IonIcon name="triangle" size={20} color={"#fa8200"} />
           </View>
    <View style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row", gap:3}}>
    <Icon name="circle" size={15} color={"#fa8200"} />
    <Icon name="square" size={15} color={"#fa8200"} />
    </View>
        </View>
    </SafeAreaView>
  )
}
export  function CategoryOutline() {
    return (
      <SafeAreaView>
          <View style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
             <View>
             <IonIcon name="triangle-outline" size={21} color={"#fff"} />
             </View>
      <View style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row", gap:3}}>
      <Icon name="circle-thin" size={16} color={"#fff"} />
      <Icon name="square-o" size={16} color={"#fff"} />
      </View>
          </View>
      </SafeAreaView>
    )
  }
  module.exports = {CategoryOutline,CategoryIcon}