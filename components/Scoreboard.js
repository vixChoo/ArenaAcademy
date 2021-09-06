import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';
import Leaderboard from 'react-native-leaderboard'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../assets/constants/colors';
import { Actions } from 'react-native-router-flux';

export const Scoreboard = (props) => {

    const score = props.score ? props.score : 13
    const userScore = [
            {userName: 'Joe', score: 52, avatar:"https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls="},
            {userName: 'Jenny', score: 9, avatar:"https://www.photopills.com/sites/default/files/articles/2015/fullmoon-kites.jpg"},
            {userName: 'Emma', score: 38, avatar:"https://cdn.pixabay.com/photo/2018/03/21/16/50/woman-3247382_960_720.jpg"},
            {userName: 'Hena', score: 12, avatar:"https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g="},
        ]
    return (
        <ImageBackground
            source={require('../assets/images/back.png')}
            style={{
                width: "100%",
                height: "100%"
            }}>
            <View style={{
                width: "100%",
                marginTop: 20,
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
                alignContent: 'center'
            }}>
                    <MaterialCommunityIcons name="crown" style={{
                            color: "#FFB319",
                            marginVertical: 15,
                            fontSize: 30,
                        }} />
                    <Image
                         source={require('../assets/images/people1.png')}
                         style={{ width: 80,
                            height: 80,
                            borderRadius: 50,}}
                    />
                    <Text style={styles.name}>Score: {score}</Text>
                    <Text style={styles.congrat}>Congratulations!</Text>
            </View>
            <View style={styles.container}>
                <Leaderboard 
                data={userScore} 
                sortBy='score' 
                labelBy='userName'
                icon="avatar"
                scoreStyle={{fontSize: 20}}
                oddRowColor={COLORS.background}
                evenRowColor={COLORS.background}
                />
            </View>
            {/* <TouchableOpacity style={styles.NextButton}
                onPress={() => Actions.home()}
            >
                <Text style={styles.buttonTxt}>
                    Next
                </Text>
            </TouchableOpacity> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        marginHorizontal: 20,
    },
    NextButton: {
        width: '90%', 
        backgroundColor: COLORS.blue, 
        padding: 20, 
        borderRadius: 5,
        marginHorizontal: 20,
    },
    buttonTxt: {
        fontSize: 20, 
        color: COLORS.white, 
        textAlign: 'center'
    },
    name: {
        marginTop: 15,
        color: COLORS.white,
        fontSize: 18,
    },
    congrat: {
        marginTop: 10,
        color: "#FFEDDA",
        fontSize: 20,
    }
   
})