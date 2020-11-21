import * as React from 'react';
import { Button, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "../screens/MainScreen";

function Home() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={MainScreen((navigation) => navigation.navigate('Messages'), "Feed")} />
            <Stack.Screen name="Messages" component={MainScreen((navigation) => navigation.navigate('Profile'), "Messages")} />
        </Stack.Navigator>
    );

    navigation
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Profile" component={MainScreen((navigation) => navigation.navigate('Settings'), "Profile")} />
                <Stack.Screen name="Settings" component={MainScreen((navigation) => navigation.navigate('Home'), "Settings")} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
