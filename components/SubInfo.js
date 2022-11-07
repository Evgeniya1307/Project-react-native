import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

//все разные информационные компоненты


export const NFTTitle =({ title, subTitle, titleSize, subTitleSize })=>{
    return (
        <View>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: titleSize,
              color: COLORS.primary,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: subTitleSize,
              color: COLORS.primary,
            }}
          >
            by {subTitle}
          </Text>
        </View>
      );
};

//вернуть цену
export const EthPrice =({price})=>{
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={assets.eth} //лого цены
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 2 }}
          />
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.font,
              color: COLORS.primary,
            }}
          >
            {price}
          </Text>
        </View>
      );
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
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} /> //возращаю другой компонент находящийся внутри информации 
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
            paddingHorizontal: SIZES.font, //отступ по горизонтали
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            justifyContent: "center",
            alignItems: "center", //Ending in по центру 
            ...SHADOWS.light, //распростронила все тени
            elevation: 1,//возвышение высота
            maxWidth: "50%",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular, //семейство шрифтов
              fontSize: SIZES.small,//маленький размер
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

