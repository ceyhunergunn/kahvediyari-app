import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, View} from "react-native";
import { TextInput, Button} from "react-native-paper";
import auth from "@react-native-firebase/auth";
import { SignUpUser } from "../apiServices";

    
const SignUp = () =>{

    const [state, setState] = React.useState({
        name : '',
        email: '',
        password: '',
    })
    
    const [user,setUser]= React.useState();
/*
    SignUpUser(state.name,state.email,state.password).then(data=>{
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
    
    <View style={{margin: 16}}>
            <TextInput 
                label="İsim"
                keyboardType="default" 
                value={state.name}
                onChangeText = {(text)=> setState({...state,name:text})}
                style={{margin: 16}} />

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
            <Button mode="contained" onPress={()=> navigation.popToTop()} >Üye Ol</Button>

            <Text style={{textAlign: "center", color: "gray", marginTop: 16}}>
                Kayıtlı Bir Hesabınız Varsa Giriş Butonuna Tıklayınız
            </Text>

            <Button style= {{ marginTop:16}}onPress={()=> navigation.navigate('Giriş')} >Giriş</Button>
    </View>
)}



/*const firebaseConfig = {
  apiKey: "AIzaSyBv_srqPBX8DsoKUk8TWqOz0ms2mQ_R4Y4",
  authDomain: "kahvediyari-b1975.firebaseapp.com",
  projectId: "kahvediyari-b1975",
  storageBucket: "kahvediyari-b1975.appspot.com",
  messagingSenderId: "295392204593",
  appId: "1:295392204593:web:1d61eb6ebfca7ee5ce8210"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

    
    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState('') 

    const createAccount = async () => {
       try{
        setIsLoading(true)
        auth().createUserWithEmailAndPassword(email,password)

       }catch(e) {
        setIsLoading(false)
        alert(e.message)
        
       }
    }
    
 
    const createAccount = async () => {
            setIsLoading(true)
            await createUserWithEmailAndPassword(auth,email,password)
            updateCurrentUser(auth, {displayName: name}).then(()=>{
                console.log('Tebrikler, Başarıyla Kayıt Oldunuz!')
            });   
            setIsLoading(false)
        
            }
    return(
        <View style={{margin: 16}}>
            <TextInput 
                label="İsim" 
                style={{margin: 16}} 
                value={name} 
                onChangeText={(text)=>setName(text)}/>

            <TextInput 
                label="Soyisim" 
                style={{margin: 16}}
                value={surname} 
                onChangeText={(text)=>setSurname(text)}/>

            <TextInput 
                label="E-Mail" 
                style={{margin: 16}}
                value={email} 
                onChangeText={(text)=>setEmail(text)}/>

            <TextInput 
                label="Şifre" 
                style={{margin: 16}}
                value={password} 
                onChangeText={(text)=>setPassword(text)}/>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin:16}}>
                <Button compact>Giriş Yap</Button>
                <Button mode="contained" onPress={() => createAccount()} loading={isloading} >Kayıt Ol</Button>
            </View>
            
        </View>
    )
}
*/
export default SignUp;