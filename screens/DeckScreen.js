import React, { useEffect }  from "react";
import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native'
import { connect } from "react-redux";
import  MapView  from 'react-native-maps'
import { Card, Button } from "react-native-elements";
import Swipe from "../components/Swipe";
import * as actions from '../actions'
import { likeJob } from "../actions";
import { navigate } from "../RootNavigation";

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
                <Card.Title> {job.jobtitle} </Card.Title>
                    <MapView 
                    style= {{ height: 300, flex:1 }}
                    scrollEnabled={ false }
                    cacheEnabled={ Platform.OS === 'android' ? true: false }
                    region = { initialRegion }
                />
                    <Text>{ job.company }</Text>
                    <Text>{ job.formattedRelativeTime }</Text>
                <Text> { job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '') }</Text>
            </Card>
        )
    }
    const renderNoMoreCards = () => {
        return (
            <Card title= 'No more jobs'>
                <Text>No More Jobs</Text>
                <Button title="Go back to the Map" 
                large
                icon={{name: 'my-location'}}
                backgroundColor= "03A9F4"
                onPress={() => {navigate('Map')}}
                />
            </Card>
        )
    }
    const onSwipeRight = (job) => {
        likeJob(job)
        console.log('jobliked')
    }
    const onSwipeLeft = () => {
        
    }
    return(
        <View>
            <Swipe data={ jobs }
           renderCard= { renderCard }
           onSwipeLeft={ onSwipeLeft } 
           onSwipeRight = { (job) => onSwipeRight(job) }
           renderNoMoreCards = { renderNoMoreCards }
           keyProp = {jobs.jobkey}
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