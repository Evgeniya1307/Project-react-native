import { TouchableOpacity,View, Text, Image } from 'react-native'; //TouchableOpacity Непрозрачность
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({imgUrl, handlePress, ...props }) => { //сделала маленькую круглую кнопочку на блоках
  return (
  <TouchableOpacity style={{ 
        width:40,
    height:40,
    backgroundColor:COLORS.white,
    position: 'absolute',//появятся в левом верхнем углу
    borderRadius:SIZES.extraLarge,//круглый очень большой
alignItems: 'center',
justifyContent:'center',
...SHADOWS.light,
...props,
}}//описала кнопку маленькую   

onPress={handlePress}
>
{/*сердечки в круглой кнопке */}
<Image
source={imgUrl}
resizeMode='contain' //режим изменения размера
style={{width:24, height:24}}
/> 
    </TouchableOpacity>
   
  );
};

export default CircleButton; 