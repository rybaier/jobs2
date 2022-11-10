import React,  { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import Slides from "../components/Slides";
import { navigate } from "../../jobs2/RootNavigation";
import AppLoading from 'expo'
import AsyncStorage from "react-native"
const WelcomeScreen = () => {

    const {token, setToken} = useState(null)
    
    const checkToken = async () => {
        setToken = await AsyncStorage.getItem('fb_token') 
    }


    const onSlidesComplete = () => {
        navigate('Auth')
    }

    const SLIDE_DATA = [
        {text: 'Welcome to JobApp', color: '#03A9F4'},
        {text: 'Use this to get a Job', color: '#009688'},
        {text: 'Set your location then swipe away', color: '#03A9F4',}
    ]

    useEffect(() => {
        checkToken()

    }, [])

    return(
        
            <Slides data= { SLIDE_DATA } onComplete={ onSlidesComplete }/>
       
    )
}

const styles = StyleSheet.create({
    
})

export default WelcomeScreen