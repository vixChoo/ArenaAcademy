import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../assets/constants/colors'
import List_data  from '../data/ListData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

export const ListOfCourses = () => {

    const allCourses = List_data
    const renderList = () => {
        return(
            <View>
                {allCourses.map((course,i) => (
                <TouchableOpacity style={styles.item}
                    key={i}
                    // onPress = { () => Actions.quiz()}
                >
                    <View style={styles.row}>
                        <View style={styles.square}>
                            <MaterialCommunityIcons name={course.icon} style={styles.icon} />
                        </View>
                        <View  style={{ flexDirection: 'column', alignContent:'center'}}>
                            <Text style={styles.itemText}>{course.title}</Text>
                            <Text style={{ color: COLORS.black, fontSize: 14, marginVertical: 5 }}>{course.chapter - 3} / {course.chapter}</Text>
                        </View>
                    </View>

                    <MaterialCommunityIcons name="chevron-right" style={{
                                color: COLORS.blue,
                                fontSize: 24,
                    }} />
                </TouchableOpacity>
                ))}
            </View>
        )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Loans</Text>
            {renderList()}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15
    },
    item: {
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        marginRight: 16
    },
    itemText: {
        fontSize: 18,
        // maxWidth: '80%'
    },
    icon: {
        color: COLORS.blue,
        fontSize: 24,
        opacity: 0.5
    }
})
