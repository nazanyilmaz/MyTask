//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {taskValues} from '../../utils/constant';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {TASKDETAIL} from '../../utils/routes';

// create a component
const TaskCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(TASKDETAIL, {item: item})}
      style={styles.container}>
      <View
        style={{
          backgroundColor: taskValues.find(task => task.status === item?.status)
            ?.color,
          padding: 3,
          borderRadius: 100,
        }}>
        {taskValues.find(task => task.status === item?.status)?.icon}
      </View>
      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '800',
            color: taskValues.find(task => task.status === item?.status)?.color,
            marginBottom: 3,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: 'gray',
            marginBottom: 5,
          }}>
          {item.description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                color: taskValues.find(task => task.status === item?.status)
                  ?.color,
                marginBottom: 2,
              }}>
              Start Date
            </Text>
            <Text style={{fontSize: 10, fontWeight: '300', color: 'gray'}}>
              {moment(item.startdate).format('ll')}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                color: taskValues.find(task => task.status === item?.status)
                  ?.color,
                marginBottom: 3,
              }}>
              End Date
            </Text>
            <Text style={{fontSize: 10, fontWeight: '300', color: 'gray'}}>
              {moment(item.deadline).format('ll')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    gap: 3,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#ffff',
  },
});

//make this component available to the app
export default TaskCard;
