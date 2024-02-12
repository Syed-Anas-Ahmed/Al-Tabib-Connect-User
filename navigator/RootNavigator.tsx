import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import Onboarding from '../screens/Onboarding';
import Otp from '../screens/Otp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="h" component={HomeScreen} options={{headerShown:false}}/>
  </Stack.Navigator>
);

const InboxTab = () => (
  <Stack.Navigator>
    <Stack.Screen name="i" component={Inbox} options={{headerShown:false}}/>
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
      name="Inbox"
      component={InboxTab}
      options={{
        tabBarIcon: ({color}) => <AntDesign name="inbox" size={30} color={color} />,
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

const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
        />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otp"
        component={Otp}
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

export default RootNavigator