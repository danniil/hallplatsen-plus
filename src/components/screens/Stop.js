import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { colors } from '../../config/styles';
import { LineCard, dummyLines } from '../presentations/';
import { addSingleStop, fetchSearchStops } from '../../actions';

class Stop extends Component {
  constructor(props) {
    super(props);

    this.state = { lines: dummyLines };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* //<Divider /> */}
          {this.state.lines.map((l, i) => {
            return (
              <LineCard
                key={i}
                index={i}
                line={l.line}
                routeName={l.routeName}
                stopPos={l.stopPos}
                next={l.next}
                secondNext={l.secondNext}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    paddingTop: 15
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
)(Stop);
