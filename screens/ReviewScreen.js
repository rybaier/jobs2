import React  from "react";
import { View, Text, StyleSheet, Linking, Platform } from 'react-native'
import { Card, Button } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import * as actions from "../actions"
import MapView from 'react-native-maps'

const ReviewScreen = ({ likedJobs }) => {
console.log(likedJobs)
    const renderLikedJobs = () => {
        return likedJobs.map(job => {
            const { company, latitude, longitude, 
                jobtitle, jobkey, formattedRelativeTime, url } = job
            const initialRegion = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }
              return (
                <Card  key={jobkey}>
                    <Card.Title>{jobtitle}</Card.Title>
                   <View style = {{ height: 200 }}>
                        <MapView 
                            scrollEnabled= {false}
                            cacheEnabled= {Platform.OS === 'android'}
                            style= {{ flex: 1}}
                            region={initialRegion}
                        ></MapView>
                    
                        <View style= {styles.detailWrapper}>
                            <Text style ={styles.italics}>{company}</Text>
                            <Text style= {styles.italics}> {formattedRelativeTime}</Text>
                        </View>
                        <Button 
                            title={'Apply Now'}
                            backgroundColor = '#03A9F4'
                            onPress={()=> Linking.openURL(url)}
                        />
                    </View>
                </Card>
            )
        })
      
    }

    return(
        <ScrollView>
            { renderLikedJobs()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailWrapper:{
        marginTop: 10,
        marginBottom: 10, 
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
})

const mapStateToProps = ({ likedJobs }) => {
    return {likedJobs: likedJobs }
}
export default connect (mapStateToProps, actions)(ReviewScreen)