import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import FollowUp from '../screens/FollowUp';
import Profile from '../screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import RegisterationScreen from '../screens/RegisterationScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="hm" component={HomeScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const FollowUpTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="flwUp" component={FollowUp} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const ProfileTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="pr" component={Profile} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#05be71',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeTab}
      options={{
        tabBarIcon: ({color}) => <AntDesign name="home" size={30} color={color} />,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="FollowUp"
      component={FollowUpTab}
      options={{
        tabBarIcon: ({color}) => <AntDesign name="search1" size={30} color={color} />,
        headerShown: false,
      }}
    />

<Tab.Screen
      name="Profile"
      component={ProfileTab}
      options={{
        tabBarIcon: ({color}) => <FontAwesome name="user" size={30} color={color} />,
        headerShown: false,
        
      }}
    />
  </Tab.Navigator>
);

const MainNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigator