import React from "react";
//import { auth } from "./App";
import auth from '@react-native-firebase/auth'


export const SignUpUser=(email,password)=>{
    return new Promise(function(resolve,reject) {
        auth().createUserWithEmailAndPassword(email,password).then(()=>{
            resolve('Kayıt Başarılı!');
        }).catch((error)=>{
            reject(error)
        })
    })
}

export const SignInUser=(email,password)=>{
    return new Promise(function(resolve,reject) {
        auth().signInWithEmailAndPassword(email,password).then(()=>{
            resolve('Giriş Başarılı!');
        }).catch((error)=>{
            reject(error)
        })
    })
}