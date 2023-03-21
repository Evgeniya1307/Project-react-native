import React, { useState } from "react";
import { View, Text } from "react-native";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

//описание
const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100)); //first this is the description data and then from 0,100 - the first 100 characters (to show not everything in its entirety)
  const [readMore, setReadMore] = useState(false); 

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
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
            style={{
              color: COLORS.primary,
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
            }} //{!readMore && "..."}если не читать дальше то покажу три точки
            onPress={() => {
              //function will check properties read more
              if (!readMore) {
                //and if you don't read on
                setText(data.description); //тогда ус-ть текст равным данных
                setReadMore(true); // а также уст-ть Читать далее
              } else {
                setText(data.description.slice(0, 100)); //сокращаю текст
                setReadMore(false);
              }
            }}
          >
            {readMore ? " Show Less" : " Read More"}
          </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
