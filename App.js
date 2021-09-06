import React, {Component} from 'react';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { ListOfCourses } from './components/List';
import { Course } from './components/Course';
import { Quiz } from './components/Quiz';
import { Scoreboard } from './components/Scoreboard';
import { Cert } from './components/Cert';
import { Router, Scene } from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs() {
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#F92036',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="List"
        component={ListOfCourses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Course"
        component={Course}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" color={color} size={size} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ballot" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name="Scoreboard"
        component={Scoreboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="sword-cross"
              color={color}
              size={size}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Cert"
        component={Cert}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="crown" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Your Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
    {/* <Router>
      <Scene key="root">
        <Scene
          key="home"
          title="Home"
          component={Home}
          hideNavBar
          initial />
        <Scene
          key="profile"
          title="Profile"
          component={Profile}
          hideNavBar />
        <Scene
          key="courses"
          title="List Of Courses"
          component={ListOfCourses}
          hideNavBar />
        <Scene
          key="elearn"
          title="Learning"
          component={Course}
          hideNavBar />
        <Scene
          key="scoreboard"
          title="Scoreboard"
          component={Scoreboard}
          hideNavBar />
        <Scene
          key="quiz"
          title="Quiz"
          component={Quiz}
          hideNavBar />
        <Scene
          key="cert"
          title="Cert"
          component={Cert}
          hideNavBar />
      </Scene>
    </Router> */}
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen name="MyTab" component={MyTab} />
          <Stack.Screen name="Home" component={MyTab} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Cert" component={Cert} />
          <Stack.Screen name="Scoreboard" component={Scoreboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="courses" component={ListOfCourses} />
          <Stack.Screen name="elearn" component={Course} />
        </Stack.Navigator> */}
        <MyTabs />
      </NavigationContainer>
    </>
  )
}



