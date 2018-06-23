import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class LineCard extends Component {
  render() {
    let {
      line,
      routeName,
      stopPos,
      color,
      text,
      next,
      secondNext,
      navigation
    } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('main')}>
        <View style={[styles.container, { backgroundColor: color }]}>
          <View style={styles.numContainer}>
            <Text style={[styles.num, { color: text }]}>{line}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.stopText, { color: text }]}>{routeName}</Text>
            <Text style={[styles.posText, { color: text }]}>
              Läge: {stopPos}
            </Text>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.minutesContainer}>
              <Text style={[styles.minutes, { color: text }]}>{next}</Text>
              <Text style={[styles.minutesText, { color: text }]}>min</Text>
            </View>
            <View style={styles.minutesContainer}>
              <Text style={[styles.minutes, { color: text }]}>
                {secondNext}
              </Text>
              <Text style={[styles.minutesText, { color: text }]}>min</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
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
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  minutes: { fontSize: 25, fontWeight: 'bold', color: 'white' },
  minutesText: { fontSize: 10, fontWeight: 'bold', color: 'white' },
  stopText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  posText: { fontSize: 12, fontWeight: 'bold', color: 'white' }
});

export default LineCard;
