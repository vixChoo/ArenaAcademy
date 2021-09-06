import React, { useState } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  SafeAreaView, 
  TouchableOpacity} from 'react-native';
import { COLORS } from '../assets/constants/colors'
import Carousel from 'react-native-snap-carousel';
import { Video, AVPlaybackStatus } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export const Course = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [activeIndex, setactiveIndex] = useState(0)
  const carouselItems = [
  {
      title:"What is a Loan?",
      num: "0",
      text: "Text 1",
      video: 
      require("../assets/images/dividends3.mp4")
  },
  {
      title:"Secured Vs Unsecured",
      num: "1",
      text: "Text 2",
      video: require("../assets/images/dividends1.mp4")
  },
  {
      title:"Revolving vs Term Loan",
      num: "2",
      text: "Text 3",
      video: require("../assets/images/dividends2.mp4")
  },
]
const renderItem = (item,index) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
         onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.replayAsync()}
        >
        <Video
          ref={video}
          style={styles.video}
          source={item.item.video}
          // shouldPlay
          resizeMode="cover"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </TouchableOpacity>
      <View style={{paddingTop: 10}}>
        {/* <Text style={{fontSize: 20, color: COLORS.black}}>{item.item.title}</Text> */}
      </View>
    </View>
  )
}

      return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background, paddingTop: 50, }}>
        <View
          style={{ 
          marginHorizontal: 25,
          paddingTop: 10,
          marginBottom: -30
          }}
        >
              <Text style={styles.sectionTitle}>Loans</Text>
            </View>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
              <Carousel
                layout={"default"}
                ref={ref => carousel = ref}
                data={carouselItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
                onSnapToItem = { index => setactiveIndex(index) } />
          </View>
          <View
              style={{  width: "100%",
              marginTop: 20,
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              alignContent: 'center'}}
            >
                  <Text style={{marginHorizontal: 12, color: COLORS.primary, fontSize: 18, }}>
                      Brought to you by Proton
                  </Text>
            </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 500,
    padding: 50,
    marginLeft: 25,
    marginRight: 25, 
  },
    video: {
    alignSelf: 'center',
    resizeMode: 'cover',
    height: 500,
    width: 250
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15
  },
})