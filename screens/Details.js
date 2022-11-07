import React from "react";
import {  View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar  } from "../components";

//детали второй экран 
const Details = ({route,navigation}) => { //получаю маршрут на котором нахожусь и и навигацию 
  return (
  <Text>'Details'</Text>
  )
}

export default Details;
