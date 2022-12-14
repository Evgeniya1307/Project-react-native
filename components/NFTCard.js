import { View,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS,assets } from '../constants'
import {CircleButton, RectButton} from './Button';
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCard = ({data}) => {//получаю данные 
 const navigation=useNavigation() 
  
    return (
    <View 
    style={{ 
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark, //распростронила тени
//верхние стили получила theme.js там объект содержащий разные значения 

    }}>
<View 
style={{
  width:"100%", 
  height:250,
}}
>
<Image
source={data.image}
resizeMode="cover"//меняю размер 
style={{
  width: "100%",
  height: "100%",
  borderTopLeftRadius: SIZES.font,
  borderTopRightRadius: SIZES.font,
}}
/>
<CircleButton imgUrl={assets.heart} right={10} top={10} />
</View>
<SubInfo/>
<View style={{ width: "100%", padding: SIZES.font }}>
<NFTTitle
title={data.name} //заголовок
subTitle={data.creator}//подзаголовок
titleSize={SIZES.large}//размер заголовка
subTitleSize={SIZES.small}//размер субтитров
/>
<View
          style={{
            marginTop: SIZES.font, //поле сверху
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        
          <EthPrice price={data.price} />
          <RectButton //прямоугольная кнопка
          minWidth={120}
          fontSize={SIZES.font}
          handlePress={() => navigation.navigate("Details", { data })} //функция нажатия обратного вызова для перехода к деталям ,второй параметр объект содержащий все данные 
        />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;


//<subInfa/>дополнительная инфа 