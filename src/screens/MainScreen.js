import React from 'react';
import {useTheme} from "../context/ThemeStore";
import {View, Switch} from "react-native";
import {Text} from "react-native";
import {Button} from "react-native";

const MainScreen = (onPress,text) => {
    return(
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text>{text}</Text>
            <Text>{text}</Text>
            <Text>{text}</Text>
            <Button onPress={{onPress}} title={{text}}/>
        </View>
    )
}

export default MainScreen;
