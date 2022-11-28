import React, { useEffect }  from "react";
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from "react-redux";
import Swipe from "../components/Swipe";
import { Mapview } from 'react-native-maps'
import { Card, Button } from "@rneui/themed";

const DeckScreen = ({ jobs }) => {
    // console.log(jobs, '1')
    const renderCard = (job) => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }
        return(
            <Card title = { job.jobtitle }>
                <View style= {{ height: 300 }}>
                    <Mapview 
                    scrollEnabled={ false }
                    style = {{ flex:1 }}
                    cacheEnabled={ Platform.OS === 'android' ? true: false }
                    intialRegion = { initialRegion }
                />
                </View>
                <View style={ styles.detailWrapper }>
                    <Text>{ job.company }</Text>
                    <Text>{ job.formattedRelativeTime }</Text>
                </View>
                <Text> { job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '') }</Text>
            </Card>
        )
    }
    const renderNoMoreCards = () => {
        return (
            <Card title= 'No more jobs'>
                <Text>Deck</Text>
            </Card>
        )
    }

    return(
        <View>
            <Swipe data={ jobs }
            renderCard={ renderCard }
            renderNoMoreCards= { renderNoMoreCards }
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

export default connect (mapStateToProps) (DeckScreen)