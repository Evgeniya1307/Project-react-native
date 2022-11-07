import { createStackNavigator } from "@react-navigation/stack"; //возможность перехода между экранами, где каждый новый экран помещается поверх стека
import { Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"; //NavigationContainer-за управление состоянием приложения и привязку навигатора верхнего уровня к среде приложения.
import { useFonts } from "expo-font"; //шрифты
import Home from "./screens/Home";
import Details from "./screens/Details";

const Stack = createStackNavigator();

const theme = { //создалa тему будут распространяться все эл.темы по умолчанию
  ...DefaultTheme,
  colors:{//доступ к цветам}
    ...DefaultTheme.colors,
background:"transparent"//изменяю фон
  }
}


const App = () => {
  const[loaded]=useFonts({//использую шрифты
InterBold:require("./assets/Inter-Bold.ttf"),
InterSemiBold:require("./assets/Inter-SemiBold.ttf"),
InterMedium:require("./assets/Inter-Medium.ttf"),
InterRegular:require("./assets/Inter-Regular.ttf"),
InterLight:require("./assets/Inter-Light.ttf"),
  });

  if(!loaded) return null;{ //если не загружен то null

  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}}
      initialRouteName="Home">{/*экран опций равен объекту где ус-да заголовок значения  начальное имя маршрута  */}
        <Stack.Screen name="Home" component={Home}/>{/*первый маршрут */}
        <Stack.Screen name="Details" component={Details} />{/*name="Details"-детали components-подробности*/ }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
