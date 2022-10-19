import React from "react";
import { Text, View } from "react-native";
import { List, Avatar, Divider} from 'react-native-paper';

const MenuScreen = () =>{
    return(<View style={{color: "black"}}> 
        <List.Item
            title="Ice Amreicano"
            left={() => <Avatar.Image
                size={70}
                source={require('../assets/iceamericano.jpg')} />}/>
        <Divider inset />
        <List.Item
            title="Ice Mocha"
            left={() => <Avatar.Image
                size={70}
                source={require('../assets/mocha.jpg')} />}/>
        <Divider inset />
        <List.Item
            title="Ice Latte"
            left={() => <Avatar.Image
                size={70}
                source={require('../assets/icelatte.jpg')} />}/>
        <Divider inset />
        <List.Item
            title="Türk Kahvesi"
            left={() => <Avatar.Image
                size={70}
                source={require('../assets/tk.jpg')} />}/>
        <Divider inset />
        <List.Item
            title="Çay"
            left={() => <Avatar.Image
                size={70}
                source={require('../assets/cay.jpg')} />}/>
        <Divider inset />
        </View>
        
    )
}
export default MenuScreen;