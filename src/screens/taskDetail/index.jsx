import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppColors from '../../theme/colors';
import {Button, Divider} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import {status, taskValues} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetail = ({route, navigation}) => {
  const {item} = route?.params;
  const deleteTask = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return;
      }
      const tasks = JSON.parse(savedTasks);

      const filteredTasks = tasks.filter(task => task.id !== item.id);

      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      console.log('Görev silindi.');
    } catch (error) {
      console.error('Görev silinirken hata oluştu:', error);
    }
  };
  const updateTask = async newStatus => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return;
      }
      const tasks = JSON.parse(savedTasks);

      const updatedTasks = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus,
          };
        }
        return task;
      });

      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      console.log('Görev güncellendi:', updatedTasks);
    } catch (error) {
      console.error('Görev güncellenirken hata oluştu:', error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Title:</Text>
          <Text>{item.title}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Description:</Text>
          <Text>{item.description}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Start Date:</Text>
          <Text>{moment(item.startdate).format('ll')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>End Date:</Text>
          <Text>{moment(item.deadline).format('ll')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Category:</Text>
          <Text>{setCategory(item.category)}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Status:</Text>
          <Text>
            {taskValues.find(task => task.status === item?.status).title}
          </Text>
        </View>
      </ScrollView>
      <View style={{bottom: 20}}>
        <Button
          onPress={() => {
            updateTask(status.PENGING), navigation.goBack();
          }}
          style={styles.button}
          status="primary">
          START
        </Button>
        <Button
          onPress={() => {
            updateTask(status.COMPLATED), navigation.goBack();
          }}
          style={styles.button}
          status="success">
          COMPLATED
        </Button>
        <Button
          onPress={() => {
            updateTask(status.CANCEL), navigation.goBack();
          }}
          style={styles.button}
          status="danger">
          CANCEL
        </Button>
        <Button
          style={styles.button}
          status="basic"
          onPress={() => {
            navigation.goBack(), deleteTask();
          }}>
          DELETE
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderBlockColor: 'gray',
  },
});

export default TaskDetail;
