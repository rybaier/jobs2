import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Button } from '@rneui/themed';


const SCREEN_WIDTH = Dimensions.get('window').width

const Slides = ({ data, onComplete }) => {
       const renderLastSlide = (index) => {
        if (index === data.length -1){
            return(
                <Button title='Onwards!'  style= {styles.buttonStyle } onPress={ onComplete }/>
            )
        }
       }

    return(
        <ScrollView horizontal style={{flex:1}} pagingEnabled>
             {data.map((slide, index)=>{
            return(
                <View key={slide.text} style= {[styles.slideStyle, 
                {backgroundColor: slide.color }]}>
                    <Text style= {styles.textStyle}>{slide.text}</Text>
                    {renderLastSlide(index)}
                </View>
            )
        })}
    
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    slideStyle:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH
    },
    buttonStyle: {
        margin: 10,

    }
})

export default Slides