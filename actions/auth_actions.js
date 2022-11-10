import * as Facebook from 'expo-facebook'
import AsyncStorage from "react-native"
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";


// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token' , token)
// AsyncStorage.setItem('fb_token)

const facebookLogin = () => async (dispatch) => {  
    console.log('running check') 
    const token = await AsyncStorage.getItem('fb_token')
    console.log(token)

    if (token) {
        //dispatch an action saying FB login is done
        console.log('success')
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        // start up FB login process
        console.log('login please')
        doFacebookLogin(dispatch)
    }
}


const doFacebookLogin = async (dispatch) => {
    await Facebook.initializeAsync('679023733836267')
    const { type, token } = await Facebook.logInWithReadPermissionsAsync( {
        permissions: ['public_profile']
    });
    if ( type === 'cancel') {
        return (dispatch({ type: FACEBOOK_LOGIN_FAIL}) )
    }

    await AsyncStorage.setItem('fb_token', token)
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token})
}

export { facebookLogin }