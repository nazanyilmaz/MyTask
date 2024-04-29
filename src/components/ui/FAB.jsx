//import liraries
import React, {Component} from 'react';
import {Add} from 'iconsax-react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const FAB = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#ffffff" />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3465ff',
    width: 70,
    height: 70,
    borderRadius: 1000,
  },
});

//make this component available to the app
export default FAB;
