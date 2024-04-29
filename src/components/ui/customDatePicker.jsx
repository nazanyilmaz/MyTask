//import liraries
import {Datepicker} from '@ui-kitten/components';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const CustonmDatePicker = props => {
  const {onSelectDate} = props;
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CustonmDatePicker;
