import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { colors } from '../../config/styles';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.header}
          onPress={() => this.props.navigation.navigate('stop')}
        >
          Hållplatsen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Main;
