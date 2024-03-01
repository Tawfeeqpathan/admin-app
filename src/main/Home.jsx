import React from 'react'
import { SafeAreaView, ScrollView,Dimensions} from 'react-native'
import Search from './components/Search'
import Title from './components/Titles'
import Header from './components/Header'
export default function Home() {
  const ScreenHeight = Dimensions.get('screen').height
const Components = [
  <Search/>,<Title/>
]
  return (
    <SafeAreaView style={{backgroundColor:'black',paddingTop:10,height:ScreenHeight}}>
   <ScrollView>
    <Header/>
    <Title/>
      
   </ScrollView>
 

    </SafeAreaView>
  )
}

