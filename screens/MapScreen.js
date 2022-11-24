import { map } from "lodash";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import MapView from 'react-native-maps'
import { Button } from "@rneui/themed";
import { connect } from "react-redux";
import * as actions from '../actions'
import { fetchJobs } from "../actions";

const MapScreen = () => {
    const [ region, setRegion ] = useState({
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09         
    })
    const [mapLoaded, setMapLoaded ] =useState(false)
    
    useEffect(()=> {
        setMapLoaded(true)
    }, [])
    // console.log( region )

    const onRegionChangeComplete = (region) => {
        setRegion(region)
        console.log(region)
    }
    const onButtonPress = () => {
        fetchJobs(region)
        console.log('button pushed')
    }
    if (!mapLoaded) {
        return (
            <View style ={{ flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
    return(
        <View>
            <MapView 
            region= { region } 
            style = { styles.map } 
            onRegionChangeComplete = { (region) => onRegionChangeComplete(region) } 
            //the above arrow function updates the region to current coordinates at center of map
            // accessing the region subcomponent as an argument
            />
            <View style={ styles.buttonContainer }>
                <Button 
                large 
                title='Search This Area'
                backgroundColor = '#009688'
                icon={{ name: 'search'}}
                onPress= { onButtonPress  } 
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    buttonContainer:{
        position: 'absolute',
        top: 40,
        left: 0,
        right:  0
    }
})


export default connect(null, actions)(MapScreen)