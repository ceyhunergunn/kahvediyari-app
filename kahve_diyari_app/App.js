import React, {useEffect} from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SingUp";
import MenuScreen from './screens/Menu';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from "react-native-paper";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import Veri from "./screens/Veri";

/*

const firebaseConfig = {
  apiKey: "AIzaSyB0cGGvczFZB6r_qZfY_wcM6EeYZXJwh0Y",
  authDomain: "kahveapp-b426b.firebaseapp.com",
  projectId: "kahveapp-b426b",
  storageBucket: "kahveapp-b426b.appspot.com",
  messagingSenderId: "486258963700",
  appId: "1:486258963700:web:89a85599c9ee3518065aa1"
};

firebase.initializeApp(firebaseConfig)*/

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();


const TabsNavigator = () => {
const navigation = useNavigation()
  useEffect(()=>{
    const isLoggedIn = false
    if(!isLoggedIn) {
      navigation.navigate('Veri')
    }
  }, [])
  return(
    <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        return <Ionicons name={route.name ==='Ana Sayfa' ? "home" : route.name ==='Menü' ? "restaurant" :  route.name ==='Profil' ? "add-circle" : "bookmarks" } size={size} color={color} />;
      }
    })
  
    }>
      <Tabs.Screen name="Ana Sayfa" component={HomeScreen}/>
      <Tabs.Screen name="Menü" component={MenuScreen}/>
      <Tabs.Screen name="Profil" component={ProfileScreen}/>
      <Tabs.Screen name="Veri" component={Veri}/>
  
    </Tabs.Navigator>
  )
}
const App = () => {
  return(
    <NavigationContainer>
      <Provider>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={TabsNavigator}
        options={{headerShown:false}}/>
        <Stack.Screen name="Kayıt Ol" component={SignUp} options={{presentation: 'fullScreenModal'}}/>
        <Stack.Screen name="Giriş" component={SignIn} options={{presentation: 'fullScreenModal'}}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

export default App;

