import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

//все разные информационные компоненты


export const NFTTitle =()=>{
    
};

//вернуть цену
export const EthPrice =()=>{

};

const ImageCmp =({ imgUrl, index })=>{
    return (
        <Image
          source={imgUrl}
          resizeMode="contain"
          style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font,// если 1 изображение в строке равен ли индекс 0 то 0 верну иначе -SIZES.font
          }}
        />
      );
    };


//Люди
export const People = () => {
    return (
        <View style={{ flexDirection: "row" }}>
          {[assets.person02, assets.person03, assets.person04].map( //получу индивидуально urlадрес и индекс
            (imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} /> //возращаю другой компонент находящий внутри информации 
            )
          )}
        </View>
      );
    };

//Дата окончания
export const EndDate = () => {
    return (
        <View
          style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: "50%",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            Ending in
          </Text>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            12h 30m
          </Text>
        </View>
      );
    };

//Дополнительная информация
export const SubInfo = () => {
    return(
<View 
style={{
    width: '100%',
    paddingHorizontal:SIZES.font,
    marginTop:-SIZES.extraLarge,//верхняя граница 
flexDirection:'row', //строка в строку
justifyContent:'space-between',
}}
>
<People />
<EndDate/>
</View>
    );
};

