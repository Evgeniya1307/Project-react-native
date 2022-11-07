import{useState} from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';//SafeArea -сохранить компонент просмотра всё вместилось на экран,Flastlist-основной список когда вот вот появятся и удалит когда не надо
import React from 'react'
import {COLORS, NFTData} from '../constants';//цвета
import { NFTCard, HomeHeader, FocusedStatusBar} from '../components';


const Home = () => {
  const [nftData, setNftData] = useState(NFTData);
  
  return(
    <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar backgroundColor={COLORS.primary} />
    <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
    <FlatList
    data={nftData} //вытянула с NFTData есть доступ ко всем nfts
    renderItem={({ item }) => <NFTCard data={item} />}
    keyExtractor={(item) => item.id} // указывает списку использовать идентификаторы для ключей реакции вместо свойства ключа по умолчанию 
    showsVerticalScrollIndicator={false}//вертикальный индикатор прокрутки 
    ListHeaderComponent={<HomeHeader />}//заголовок отрисова 
    />
    </View>

    <View style={{
      position:'absolute',
      top:0,
      bottom:0,
      right:0,
      left:0,
      zIndex:-1, //позади nfds
    }}>
    <View 
    style={{ height: 300, backgroundColor: COLORS.primary }} />{/*разделила два экрана на светлый и тёмный */}
    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
    </View>
    </View>
  </SafeAreaView>
  );
};

export default Home;
