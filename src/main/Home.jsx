import React from 'react'
import { SafeAreaView, ScrollView,Dimensions} from 'react-native'
import {FlashList} from '@shopify/flash-list'
import Search from './components/Search'
import Title from './components/Titles'
export default function Home() {
  const ScreenHeight = Dimensions.get('screen').height
const Components = [
  <Search/>,<Title/>
]
  return (
    <SafeAreaView style={{backgroundColor:'black',paddingTop:50,height:ScreenHeight}}>
   <ScrollView>
    <Title/>
      
   </ScrollView>
 

    </SafeAreaView>
  )
}

