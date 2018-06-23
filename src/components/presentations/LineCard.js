import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { lines } from '../../config/styles';

class LineCard extends Component {
  render() {
    let { line, routeName, stopPos, next, secondNext, navigation } = this.props;

    let stCol = this.lineColorStyle(line, 'color');
    let stTex = this.lineColorStyle(line, 'text');

    return (
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
        <View style={[styles.container, stCol]}>
          <View style={styles.numContainer}>
            <Text style={[styles.num, stTex]}>{line}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.stopText, stTex]}>{routeName}</Text>
            <Text style={[styles.posText, stTex]}>Läge {stopPos}</Text>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.minutesContainer}>
              <Text style={[styles.minutes, stTex]}>{next}</Text>
              <Text style={[styles.minutesText, stTex]}>min</Text>
            </View>
            <View style={styles.minutesContainer}>
              <Text style={[styles.minutes, stTex]}>{secondNext}</Text>
              <Text style={[styles.minutesText, stTex]}>min</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  lineColorStyle(line, field) {
    if (line == 16) line = 'busdark';
    else if (line >= 14) line = 'bus';
    switch (field) {
      case 'color':
        return { backgroundColor: lines[line].color };
      case 'text':
        return { color: lines[line].text };
      default:
        return {};
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80
  },
  numContainer: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  num: { fontSize: 28, fontWeight: 'bold' },
  textContainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 5
  },
  timeContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  minutesContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  minutes: { fontSize: 25, fontWeight: 'bold', color: 'white' },
  minutesText: { fontSize: 10, fontWeight: 'bold', color: 'white' },
  stopText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  posText: { fontSize: 12, fontWeight: 'bold', color: 'white' }
});

export default LineCard;
