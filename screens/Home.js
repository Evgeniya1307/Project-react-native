import{useState} from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';//SafeArea -сохранить компонент просмотра всё вместилось на экран,Flastlist-основной список когда вот вот появятся и удалит когда не надо
import React from 'react'
import {COLORS, NFTData} from '../constants';//цвета
import { NFTCard, HomeHeader, FocusedStatusBar} from '../components';


const Home = () => {
  return(
  <SafeAreaView style={{flex:1}}>
  <FocusedStatusBar background={COLORS.primary}/>
    <View style={{flex:1}}>
    <View style={{zIndex:0}}>
    <FlatList
    data={NFTData} //вытянула с NFTData есть доступ ко всем nfts
    renderItem={({item})=><Text>{item.name}</Text>}
    />
    
    </View>
    </View>
  </SafeAreaView>
  )
}

export default Home;
