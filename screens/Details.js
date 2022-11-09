import React from "react";
import {  View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar  } from "../components";

//детали второй экран 
const Details = ({route,navigation}) => { //получаю маршрут на котором нахожусь и и навигацию 
  //console.log(route)
  const {data} =route.params;//данные равны маршруту
  return (
  <SafeAreaView style={{ flex: 1}}> {/*безопасная зона */}
  <FocusedStatusBar 
  barStyle="dark-content"
  backgroundColor="transparent"
  translucent={true} //полупрозрачный
/>
<View style={{
  width: '100%',
  position:'absolute',
  bottom:0,
paddingVertical: SIZES.font,
justifyContent: 'center',
alignItems: 'center',
backgroundColor:'rgba(255,255,255, 0.5)',
zIndex:1, //появится над конкретным контентом который нах-ся под ним
}}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

{/*второй список внутри у него данные*/}
<FlatList
data={data.bids}//данные ставки
renderItem={({item})=><DetailsBid/>}//обратным вызовом список кто сделал ставку деструктуризацией item и вернуть компонент DetailsBid/>}
/>

  </SafeAreaView>
  )
}

export default Details;
