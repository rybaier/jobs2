import { Button } from "@rneui/themed";
import React, { useEffect }  from "react";
import { View, Text, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import * as actions from '../actions'
import { facebookLogin } from "../actions";
import { navigate } from "../../jobs2/RootNavigation";

const AuthScreen = () => {
// facebook modal is not showing up debug later
    useEffect(()=>{
       facebookLogin()

    })
    //figure out FB modal issue first before adding to useEffect
    function  ComponentWillRecieveProps(nextProps) {
        onAuthComplete(nextProps)
    }
   
    const onAuthComplete = () => {
        navigate('Main')
    }
    
    return(
        <View>
            <Button onPress={onAuthComplete} title='Go'/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
    
function mapStateToProps( { auth }) {
    return { token: auth.token }
}

export default connect (mapStateToProps, actions )(AuthScreen)
