//подробности ставки
import { View, Text, Image } from "react-native";
import React from "react";
import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

 const DetailsBid = ({ bid }) => {
  //принимает фактическую ставку
  return (
    <View>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }} //фото людей делающих ставки
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name} {/*Ставка размещена */}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
