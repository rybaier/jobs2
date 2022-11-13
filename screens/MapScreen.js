import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import MapView from 'react-native-maps'

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
    console.log( region )

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
            />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})

export default MapScreen