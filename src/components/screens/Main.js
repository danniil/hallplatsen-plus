import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../config/styles';
import { StopCard } from '../presentations/';
import { addSingleStop, fetchSearchStops } from '../../actions/stopsActions';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '', return: '', stops: [] };
  }

  componentWillMount() {
    this.props.fetchSearchStops('chalmers');
    console.log(this.props.stops);
  }

  render() {
    console.log(this.props.loading);
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder={this.state.return}
            spellCheck={false}
            autoCorrect={false}
            returnKeyType={'next'}
            onChangeText={input => {}}
            onEndEditing={input => this.listStops(input)}
          />
        </View>
        <ScrollView>
          {this.props.stops.map((l, i) => {
            let stopname = l.name.split(', ');
            return (
              <StopCard
                key={i}
                index={i}
                stopName={stopname[0]}
                city={stopname[1]}
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
    console.log(input);
    this.props.addSingleStop('BUSSEN');
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

const mapStateToProps = state => {
  return {
    stops: state.stops.stops,
    loading: state.stops.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSearchStops,
    addSingleStop
  }
)(Main);
