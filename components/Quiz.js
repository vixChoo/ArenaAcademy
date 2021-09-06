import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Animated} from 'react-native';
import { COLORS } from '../assets/constants/colors'
import Quiz_data from '../data/QuizData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';


export const Quiz = () => {
    const allQuestions = Quiz_data
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [isOptionsDisabled, setOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })

    const renderQuestion = () => {
        return (
            <View>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={styles.counter}>{currentQuestionIndex+1}</Text>
                    <Text style={styles.counter}> / {allQuestions.length}</Text>

                </View>

                <Text style={styles.questTxt}>{allQuestions[currentQuestionIndex].question}</Text>
            </View>
        )
    }
    const renderOption = () => {
        return (
            <View>
                {   
                     allQuestions[currentQuestionIndex].options.map((option, i) => (
                        <TouchableOpacity
                            key={i}
                            style={[styles.option, {borderColor: option==correctAnswer ? COLORS.success :
                                    option==currentOptionSelected ? COLORS.danger : COLORS.black+'40'}]}
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                        >
                            <Text style={styles.optionTxt}>{option}</Text>

                            {/* Show Green or Red based on answer */}
                            {
                                option==correctAnswer ? (
                                    <View style={styles.optionGreen}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={styles.optionRed}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const validateAnswer = (selectedOption) => {
        let correct_answer = allQuestions[currentQuestionIndex]['correct_answer'];
        setCurrentOptionSelected(selectedOption);
        setCorrectAnswer(correct_answer);
        setOptionsDisabled(true);
        if(selectedOption==correct_answer){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                    <TouchableOpacity
                        onPress={() => handleNext()}
                        style={styles.button}
                    >
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
            )
        }
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
        // Last Question then Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectAnswer(null);
            setOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const renderProgressBar = () => {
        return(
            <View style={styles.progressBar}>
                <Animated.View style={[{

                    height: 10,
                    borderRadius: 20,
                    backgroundColor: "#FB724C"
                },{
                    width: progressAnim
                }]}>

                </Animated.View>
            </View>
        )
    }
    const renderScoreModal = () => {
        const grade = score> (allQuestions.length/2)

        return(
        <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.secondary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ grade ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: grade ? COLORS.success : COLORS.danger}}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Home Button */}
                           <TouchableOpacity>
                            <Text style={{marginVertical: 10,}}
                                    onPress={() => goToScore()}
                            >
                                    Check your score
                            </Text>
                        </TouchableOpacity>
                       </View>
                   </View>
               </Modal>
    )}
    const goToScore = () => {
        setShowScoreModal(false)
    }

    return (
        <SafeAreaView style={{flex: 1 }}>
            <View style={styles.quizView}>
            {/* <TouchableOpacity
                    style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'flex-end'}}
                    onPress={() => Actions.home()}
                 >
                    <MaterialCommunityIcons name="arrow-left" style={{
                        color: COLORS.black,
                        fontSize: 20
                    }} />
                    <Text style={{marginHorizontal: 12, color: COLORS.black, fontSize: 18, }}>
                        Home
                    </Text>
            </TouchableOpacity> */}
                {/* Progress Bar */}
                {renderProgressBar()}
                {/* Question */}
                {renderQuestion()}
                {renderScoreModal()}
                {/* Question Option */}
                {renderOption()}
                {/* Next Button */}
                {renderNextButton()}
                {/* Background Image */}
       
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    quizView: {
      flex: 1,
      paddingVertical: 40,
      paddingHorizontal: 16,
      backgroundColor: COLORS.background,
      position: 'relative'
    },
    counter: {
        color: COLORS.blue,
        fontSize: 16,
        opacity: 0.6,
        marginRight: 2,
        marginVertical: 10,
    },
    questTxt : {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 6,
        marginHorizontal: 2
    },
    option: {
      borderColor: "#CDF0EA",
      backgroundColor: COLORS.white,
      flexDirection: 'row',
      minHeight: 60,
      borderRadius: 20,
      alignItems: 'center', justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginVertical: 13
    },
    optionTxt: {
        fontSize: 16,
        color: COLORS.black,
        width: "85%",
        padding: 5

    },

  optionGreen: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    backgroundColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionRed: {
    width: 30, 
    height: 30, 
    borderRadius: 30/2,
    backgroundColor: COLORS.danger,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  button: {
    marginTop: 20, 
    width: '100%', 
    backgroundColor: COLORS.blue, 
    padding: 20, 
    borderRadius: 5,
  },
  nextText : {
    fontSize: 20, 
    color: COLORS.white, 
    textAlign: 'center'
    },
    progressBar : {
        width: '100%',
        height: 10,
        borderRadius: 20,
        backgroundColor: "#D1D9D9",
    }
  });