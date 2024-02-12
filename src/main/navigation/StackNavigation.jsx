import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function StackNavigation() {
    function BottomTabs(){
return(
    <Tab.Navigator>
        <Tab.Screen 
        name='home'
        component={Home}
        options={{
            tabBarLabel:"Home",
            tabBarLabelStyle:{color:"black",fontSize:15,},
            headerShown:false,
            tabBarIcon:({focused})=> focused?(<Text>yes</Text>):(<Text>no</Text>)
        }}
        /> 
    </Tab.Navigator>
)
    }
return(
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='login' component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name='register' component={Register} options={{headerShown:false}} />
        <Stack.Screen name='home' component={BottomTabs} options={{headerShown:false}}/>
    </Stack.Navigator>
 </NavigationContainer>
)

}
