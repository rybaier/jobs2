import React, { useEffect }  from "react";
import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native'
import { connect } from "react-redux";
import { MapView } from 'react-native-maps'
import { Card, Button } from "@rneui/themed";
import Swipe from "../components/Swipe";
import * as actions from '../actions'
import { stubArray } from "lodash";

const DeckScreen = ({ jobs }) => {
console.log('COMPLETE',jobs)
    const renderCard = (job) => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }
        return(
            <Card key = {job.jobkey} style = {styles.detailWrappers}>
                <Card.Title> {job.title} </Card.Title>
                    {/* <MapView 
                    style= {{ height: 300, flex:1 }}
                    scrollEnabled={ false }
                    cacheEnabled={ Platform.OS === 'android' ? true: false }
                    region = { initialRegion }
                /> */}
                    <Text>{ job.company }</Text>
                    <Text>{ job.formattedRelativeTime }</Text>
                <Text> { job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '') }</Text>
            </Card>
        )
    }
    const renderNoMoreCards = () => {
        return (
            <Card title= 'No more jobs'>
                <Text>DECK</Text>
            </Card>
        )
    }
    const onSwipeRight = () => {

    }
    const onSwipeLeft = () => {
    
    }
    return(
        <View>
            <Swipe data={ jobs }
           renderCard= { renderCard }
           onSwipeLeft={ onSwipeLeft } 
           onSwipeRight = { onSwipeRight }
           renderNoMoreCards = { renderNoMoreCards }
            />            
        </View>
    )
}

function mapStateToProps({ jobs }) {
    return { jobs: jobs.results }
}
const styles = StyleSheet.create({
    detailWrapper:{
        flexDirection: 'row',
        justifyContent:'space-around',
        marginBottom: 10
    }
})

export default connect (mapStateToProps, actions) (DeckScreen)