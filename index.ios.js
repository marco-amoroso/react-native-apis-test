/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var AudioPlayer = require('react-native-audioplayer');
var { AppRegistry, Image, StyleSheet, Text, View, TouchableHighlight } = React;
var count = 0;
var intervalId;

var EagleProject = React.createClass({
  displayCount() {
    count++;
    AudioPlayer.play('Cha-ching-sound.mp3');
    this.setState({status : 'was played ' + count + ' times'});
  },

  stopPlay() {
    clearInterval(intervalId);
  },

  componentDidMount() {
    intervalId = setInterval(this.displayCount, 1000);
  },

  getInitialState() {
    return {
      status: 'is waiting',
    }
  },

  render() {
    return (
      <View style={styles.row}>
        <View style={styles.text}>
          <Text style={styles.play}>
            Sound {this.state.status}
          </Text>
          <TouchableHighlight onPress={this.stopPlay}>
            <Text style={styles.button}>Stop</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  },
});
var styles = StyleSheet.create({
  row: { flexDirection: 'row', margin: 40 },
  text: { flex: 1, justifyContent: 'center'},
  play: { fontSize: 11, fontWeight: 'bold' },
  button: { marginTop: 10, textAlign: 'center', borderWidth: 2, borderStyle: 'solid', borderRadius: 10}
});

AppRegistry.registerComponent('EagleProject', () => EagleProject);
