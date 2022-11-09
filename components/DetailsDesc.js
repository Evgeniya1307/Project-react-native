import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

//описание
const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));//сначала это данные описание а затем от 0,100 -первые 100 символов(чтобы показывать не всё целиком)
  const [readMore, setReadMore] = useState(false);//читать дальше читать больше
  
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{marginTop:SIZES.base}}>
        <Text style={{
          color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
        }}> {text}</Text>
        {!readMore && "..."}{/*если не читать дальше то покажу три точки*/}
        </View>




      </View>
    </>
  );
};

export default DetailsDesc;
