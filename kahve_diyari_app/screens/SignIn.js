import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button} from "react-native-paper";
import auth from "@react-native-firebase/auth";
import { SignInUser } from "../apiServices";


const SignIn = () =>{
    const [state, setState] = React.useState({
        email: '',
        password: '',
    })

    const [user,setUser]= React.useState();
/*
    SignInUser(state.email,state.password).then(data=>{
        alert(data);
    }).catch(error => {
        alert(error);
    });

    const onAuthStateChanged=user=>{
        setUser(user)
    }
    
    React.useEffect(()=>{
    const subscriber=auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    },[])*/
    const navigation = useNavigation()
    return(
        <View>
        <TextInput 
            label="E-Mail" 
            keyboardType="email-address"
            value={state.email}
            onChangeText = {(text)=> setState({...state,email:text})}
            style={{margin: 16}}/>

        <TextInput 
            label="Şifre" 
            secureTextEntry
            value={state.password}
            onChangeText = {(text)=> setState({...state,password:text})}
            style={{margin: 16}}/>
        <Button mode="contained" onPress={()=> navigation.popToTop()} >Giriş</Button>

        <Text style={{textAlign: "center", color: "gray", marginTop: 16}}>
            Kayıtlı Bir Hesabınız Yoksa Kayıt Ol Butonuna Tıklayınız.
        </Text>

        <Button style= {{ marginTop:16}} onPress={()=> navigation.navigate('Kayıt Ol')} >Kayıt Ol</Button>

        
</View>);}

export default SignIn;