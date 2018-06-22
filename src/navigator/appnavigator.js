import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Main, Stop } from '../components/screens';
import { colors } from '../config/styles';
import { back, dots } from '../assets/';

const MainNav = createStackNavigator(
  {
    main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        title: 'Hållplatsen',
        headerStyle: styles.header,
        headerTitleStyle: styles.title,

        headerRight: (
          <Image
            source={dots}
            style={styles.img}
            color={'white'}
            onPress={() => null}
          />
        ),
        headerLeft: <View /> //poor fix to center
      })
    },
    stop: {
      screen: Stop,
      navigationOptions: ({ navigation }) => ({
        title: 'Stop X',
        headerStyle: styles.header,
        headerTitleStyle: styles.title,
        headerRight: (
          <Image
            source={dots}
            style={styles.img}
            color={'white'}
            onPress={() => null}
          />
        ),
        headerLeft: (
          <Image
            source={back}
            style={styles.img}
            color={'white'}
            onPress={() => navigation.goBack()}
          />
        )
      })
    }
  },
  {
    initialRouteName: 'main'
  }
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.green,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white'
  },
  img: {
    height: 24,
    width: 24,
    tintColor: 'white'
  }
});

export default MainNav;
