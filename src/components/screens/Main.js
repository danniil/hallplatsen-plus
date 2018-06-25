import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import { colors } from '../../config/styles';
import { StopCard, dummyStops } from '../presentations/';
import { getLocations } from '../../config/api';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '', stops: dummyStops, return: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder={this.state.return}
            spellCheck={false}
            autoCorrect={false}
            returnKeyType={'next'}
            onChangeText={input => {
              //this.listStops(input);
              this.setState({ search: input });
            }}
            onEndEditing={input => this.listStops(input)}
          />
        </View>
        <ScrollView>
          {this.state.stops.map((l, i) => {
            return (
              <StopCard
                key={i}
                index={i}
                stopName={l.name}
                city={'hej'}
                favorite={true}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }

  listStops(input) {
    getLocations(input)
      .then(res => {
        let { LocationList } = res;
        let { StopLocation } = LocationList;
        console.log(res);
        this.setState({ stops: StopLocation });
      })
      .catch(err => {
        alert(err);
      });
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
