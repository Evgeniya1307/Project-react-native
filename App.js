import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; //возможность перехода между экранами, где каждый новый экран помещается поверх стека
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"; //NavigationContainer-за управление состоянием приложения и привязку навигатора верхнего уровня к среде приложения.
import { useFonts } from "expo-font"; //шрифты
import Home from "./screens/Home";
import Details from "./screens/Details";

const theme = {
  //создалa тему будут распространяться все эл.темы по умолчанию
  ...DefaultTheme,
  colors: {
    //доступ к цветам}
    ...DefaultTheme.colors,
    background: "transparent", //изменяю фон
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    //использую шрифты
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;
  //если не загружен то null

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
