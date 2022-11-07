import { View, Text, Image, TextInput} from 'react-native'
import { COLORS, SIZES,FONTS, SHADOWS,assets } from '../constants'


//главный заголовок его надо внедрить внутрь домашнего заголовка 
const HomeHeader = ({onSearch}) => { 
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
<View style={{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}}
>
<Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />{/*лого pronef */}
        <View style={{ width: 45, height: 45 }}>
        <Image
          source={assets.person01}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />{/*лого с права в углу  */}
        <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />{/*внутри лого которое справа галочка в голубом */}
        </View>
</View>

<View style={{ marginVertical: SIZES.font }}>
<Text
  style={{
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  }}
>
  Hello Victoria 👋
</Text>
<Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find masterpiece Art
        </Text>
</View>

<View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}//серая линия закруглённая текст ввода
        >
        <TextInput
        placeholder='Search NFTs' //в инпуте 
        style={{ flex: 1 }}
        onChangeText={onSearch} //при изменение текста поиск 
        />
        </View> 
        </View>
    </View>
  )
}

export default HomeHeader