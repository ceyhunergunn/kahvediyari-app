import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {Button} from "react-native-paper";


const HomeScreen = () =>{
  const navigation = useNavigation()
    return(
        <View style={styles.container}>

          <View style={styles.header}>
            <View style={styles.logo}>
              <Image source={require('../assets/kd1.png')} style={{width:250,height:105,resizeMode:'contain'}} />
            </View>
          </View>

          <View style={styles.main}>
          <Button style= {{ marginTop:16, marginBottom: 440}} onPress={()=> navigation.navigate('Kayıt Ol')} >Kayıt Ol</Button>
          <Button style= {{ marginTop:16, marginBottom: 440}} onPress={()=> navigation.navigate('Giriş')} >Giriş</Button>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      textAlign:"center",
    }, 
    text:{
      alignContent: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    header:{
      flexDirection:"row",
      flex: 1,
    },
    main:{
      flex: 8,
      flexDirection : "row",
      alignContent: 'center',
      justifyContent: 'space-around',
      backgroundColor: "#fff",
      fontSize:20,
      textAlign: "center",
    },
    logo:{
      flex: 2,
      alignContent: 'center',
      justifyContent: 'center',
      fontSize: 15,
      color:"white",
    },
    settings:{
      flex: 1,
      backgroundColor:"black",
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: "white",
  },
  });
export default HomeScreen;