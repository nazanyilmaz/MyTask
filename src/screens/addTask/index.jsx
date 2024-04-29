//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import CustonmDatePicker from '../../components/ui/customDatePicker';
import {taskSchema} from '../../utils/validations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/constant';
import uuid from 'react-native-uuid';

// create a component
const AddTask = ({navigation}) => {
  const savedTask = async values => {
    //await AsyncStorage.removeItem('tasks'); //idsi olmayan taskalri silmek icin kullandik.
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];
      myTask?.push(values);
      await AsyncStorage.setItem('tasks', JSON.stringify(myTask));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid.v4(),
          title: '',
          description: '',
          startdate: null,
          deadline: null,
          category: null,
          status: status.ONGOING,
        }}
        validationSchema={taskSchema}
        onSubmit={values => savedTask(values)}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View style={{marginHorizontal: 10}}>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Title'}
              placeholder="Type task title"
              onChangeText={handleChange('title')}
              status={errors.title ? 'danger' : 'basic'}
              caption={errors.title}
            />
            <Input
              multiline
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'Description'}
              placeholder="Type task description"
              onChangeText={handleChange('description')}
              status={errors.description ? 'danger' : 'basic'}
              caption={errors.description}
            />

            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CustonmDatePicker
                size="medium"
                style={{marginVertical: 10, width: 180}}
                date={values.startdate}
                label={'Startdate'}
                onSelectDate={date => setFieldValue('startdate', date)}
                status={errors.startdate ? 'danger' : 'basic'}
                caption={errors.startdate}
              />
              <CustonmDatePicker
                size="medium"
                style={{marginVertical: 10, width: 180}}
                date={values.deadline}
                label={'Deadline'}
                onSelectDate={date => setFieldValue('deadline', date)}
                status={errors.deadline ? 'danger' : 'basic'}
                caption={errors.deadline}
              />
            </View>
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio>Software</Radio>
              <Radio>Design</Radio>
              <Radio>Operation</Radio>
            </RadioGroup>

            <Button
              status="success"
              style={{
                marginTop: 30,
                backgroundColor: '#3465ff',
                borderColor: '#697689',
                borderRadius: 30,
              }}
              onPress={() => {
                navigation.goBack(), handleSubmit();
              }}>
              Create
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default AddTask;
