import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import { colors } from '../../config/styles';
import { StopCard, dummyStops } from '../presentations/';
import { GET } from '../../config/api';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '', stops: dummyStops };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            spellCheck={false}
            autoCorrect={false}
            returnKeyType={'next'}
            onChangeText={input => {
              this.listStops(input);
              this.setState({ search: input });
            }}
            onEndEditing={() => null}
          />
        </View>
        <ScrollView>
          {this.state.stops.map((l, i) => {
            return (
              <StopCard
                key={i}
                index={i}
                stopName={l.stopName}
                city={l.city}
                favorite={l.favorite}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }

  listStops(input) {
    //search stops and display
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green
  },
  searchContainer: {
    height: 60,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  search: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
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
