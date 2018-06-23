import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { star, starfull } from '../../assets/';
import { colors } from '../../config/styles';

class StopCard extends Component {
  render() {
    let { stopName, city, favorite, navigation } = this.props;
    console.log(this.props.index);
    let lighter =
      (this.props.index + 1) % 2
        ? { backgroundColor: colors.lightgreen }
        : null;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('stop')}>
        <View style={[styles.container, lighter]}>
          <View style={styles.textContainer}>
            <Text style={styles.stopText}>{stopName}</Text>
            <Text style={styles.cityText}>{city}</Text>
          </View>
          <Image source={!!favorite ? starfull : star} style={styles.star} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.green
  },
  textContainer: { flexDirection: 'column' },
  stopText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  cityText: { fontSize: 12, fontWeight: 'bold', color: 'white' },
  star: {
    height: 24,
    width: 24,
    tintColor: 'white'
  }
});

export default StopCard;
