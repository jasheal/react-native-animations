/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

class Animations extends Component {

  constructor(props){
    super(props);

    this.fadeAnim = new Animated.Value(0);

  }

  componentDidMount() {
    
    Animated.timing(
       this.fadeAnim,
       {toValue: 1}
     ).start(); 
  
}


  render() {
    let fade = {opacity: this.fadeAnim}

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animatedShape, fade]}></Animated.View>
      </View>
    );
  }
}

export default Animations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  animatedShape: {
    width: 100,
    height: 100,
    backgroundColor: "steelblue"
  }
})
