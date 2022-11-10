import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native"; //SafeArea -сохранить компонент просмотра всё вместилось на экран,Flastlist-основной список когда вот вот появятся и удалит когда не надо
import React from "react";
import { COLORS, NFTData } from "../constants"; //цвета
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  //поиск
  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData); //если значение длина равна 0

    const filteredData = NFTData.filter(
      (
        item //фильтрую данные получаю доступ к элементу и проверяю яв-ся ли элемент имя на нижний регистр, includes- то прохожусь в значении а затем внижнем регистре
      ) => item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      //проверяю длинну отфильтрованных данных
      setNftData(NFTData); //если есть хотябы 1 элемент устанавливаю эти данные
    } else {
      setNftData(filteredData); //иначе как неизменный массив
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
      <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData} //вытянула с NFTData есть доступ ко всем nfts
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id} // указывает списку использовать идентификаторы для ключей реакции вместо свойства ключа по умолчанию
            showsVerticalScrollIndicator={false} //вертикальный индикатор прокрутки
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />} //заголовок отрисова даст инфу о вошедшем человеке
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,//позади nfds
          }}
        >
          <View  style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView> //{разделила два экрана на светлый и тёмный
  );
};

export default Home;
