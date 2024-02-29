import React, { Component } from 'react'
import { SafeAreaView, View ,Text} from 'react-native'
import {FlashList} from '@shopify/flash-list'
import Search from './components/Search'
import Title from './homeComponents/Titles'
export default function Home() {
const Components = [
  <Search/>,<Title/>
]
  return (
    <SafeAreaView style={{backgroundColor:'black',paddingTop:10}}>
    <View style={{height:300}}>
  <FlashList
  data={Components}
  renderItem={({item})=><View>{item}</View>}
  keyExtractor={(item,index)=>index.toString()}
  estimatedItemSize={200}
  horizontal={false}
  />
      </View>

    </SafeAreaView>
  )
}

