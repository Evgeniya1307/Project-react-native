//подробности ставки
import { View, Text, Image } from "react-native";
import React from "react";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

 const DetailsBid = ({ bid }) => {
  //принимает фактическую ставку
  return (
    <View 
    style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base *2,
    }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }} //фото людей делающих ставки
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,//полужирный
            fontSize: SIZES.small,//маленькицй
            color: COLORS.primary,//начальный
          }}
        >
          Bid placed by {bid.name} 
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,//постоянной
            fontSize: SIZES.small - 2,//чтобы сделать немного меньше
            color: COLORS.secondary,//цвет второстепенный
            marginTop: 3,//верхняя граница
          }}
        >
          {bid.date} {/*дата ставки */}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>//принимает цену ставки bid.price
  );
};

export default DetailsBid;
