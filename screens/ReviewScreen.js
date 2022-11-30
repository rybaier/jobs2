import React  from "react";
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import jobs_reducer from "../reducers/jobs_reducer";


const ReviewScreen = () => {

    const renderLikedJobs = () => {
        return (
            <Card style = {{ height: 200 }}>
                <View style= {styles.detailWrapper}>
                    <Text style ={styles.italics}>{job.company}</Text>
                    <Text style= {styles.italics}> {job.formattedRelativeTime}</Text>
                </View>
            </Card>
        )
    }

    return(
        <ScrollView>
            { likedJobs()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailWrapper:{
        marginBottom: 10, 
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
})

const mapStateToProps = (state) => {
    return {likedJobs: likedJobs }
}
export default connect (mapStateToProps)(ReviewScreen)