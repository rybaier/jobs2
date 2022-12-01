import React  from "react";
import { View, Text, StyleSheet } from 'react-native'
import { connect } from "react-redux";
import { Button } from "@rneui/themed";
import { clearLikedJobs } from "../actions";

const SettingScreen = () => {
    return(
        <View>
            <Button title ='Reset Liked Jobs'
            large
            icon= {{name: 'delete-forever' }}
            backgroundColor="#F44336"
            onPress={() => clearLikedJobs} />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

const mapStateToProps = ({likedJobs}) => {
    return {likedJobs: likedJobs}
}
export default connect (mapStateToProps, clearLikedJobs) (SettingScreen)