import React from "react";
import {  View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar  } from "../components";


//заголовок сведений
const DetailsHeader=({data, navigation})=>{
<View style={{width:'100%', height:373}}>
<Image
source={data.image}
resizeMode='cover'
style={{width:'100%', height:'100%'}}
/>

<CircleButton 
imgUrl={assets.left}
handlePress={()=>navigation.goBack()}
left={15}
top={StatusBar.currentHeight +10}
/> {/*для левой кнопки */}

<CircleButton 
imgUrl={assets.heart}
right={15}
top={StatusBar.currentHeight +10}
/>{/*для сердечка справа */}
</View>
}


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
renderItem={({item})=><DetailsBid bid={item}/>}//обратным вызовом список кто сделал ставку деструктуризацией item и вернуть компонент DetailsBid который примет предложение bid{item}/>}

keyExtractor={(item)=>item.id}/>
showsVerticalScrollIndicator={false}{/*вертикальная прокрутка */}
contentContainerStyle={{
  paddingBottom: SIZES.extraLarge * 3}}
  {/*заголовок списка */}
  ListHeaderComponent={()=>(
<React.Fragment> {/*Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM */}
<DetailsHeader data={data} navigation={navigation}/> {/*заголовок сведений*/}
<SubInfo/>{/*дополнительную инфу */}
<View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} /> {/*рендерю компонент описаний и передаю данные*/}

              {data.bids.length > 0 && ( //яв-ли длинна битов данных больше 0 в этом случае отображу текс
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid {/*текущая ставка */}
                </Text>
              )}
            </View>

</React.Fragment>

  )}
</SafeAreaView>
  )
}

export default Details;
