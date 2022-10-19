import React from "react";
import { Text ,View } from "react-native";
import { Title, Avatar, Subheading, Button} from 'react-native-paper';

const ProfileScreen = () =>{
    return(
        <View style={{alignItems: "center" , marginTop: 20,color: "black"}}>
            <Avatar.Image
                size={70}
                source={require('../assets/a3.jpg')} />
            <Title>Ceyhun ERGÜN</Title>
            <Subheading>ceyhunergun61@gmail.com</Subheading>
            <Button>Çıkış Yap</Button>
        </View>
    )
}
export default ProfileScreen;