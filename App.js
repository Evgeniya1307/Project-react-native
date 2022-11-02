import { createStackNavigator } from "@react-navigation/stack"; //возможность перехода между экранами, где каждый новый экран помещается поверх стека
import { Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"; //NavigationContainer-за управление состоянием приложения и привязку навигатора верхнего уровня к среде приложения.
import { useFonts } from "expo-font"; //шрифты

const Stack = createStackNavigator();

const theme = { //создалa тему будут распространяться все эл.темы по умолчанию
  ...DefaultTheme,
  colors:{//доступ к цветам}
    ...DefaultTheme.colors,
background:"transparent"//изменяю фон
  }
}


const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>{/*экран опций равен объекту где ус-да заголовок значения  */}
        <Stack.Screen />
        <Stack.Screen />
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
