//import liraries
import React from 'react';
import {
  ArrowCircleRight2,
  ChartCircle,
  Clock,
  TickCircle,
  CloseCircle,
} from 'iconsax-react-native';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import AppColors from '../../theme/colors';

// create a component
const HeaderComponent = ({ongoing, pending, complated, cancel}) => {
  const tasks = [
    {
      id: 1,
      title: 'Ongoing',
      color: AppColors.ONGOING,
      icon: <ChartCircle size="32" color={AppColors.GRAY} />,
      count: ongoing,
    },
    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDING,
      icon: <Clock size="32" color={AppColors.GRAY} />,
      count: pending,
    },
    {
      id: 3,
      title: 'Complated',
      color: AppColors.COMPLATE,
      icon: <TickCircle size="32" color={AppColors.GRAY} />,
      count: complated,
    },
    {
      id: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size="32" color={AppColors.GRAY} />,
      count: cancel,
    },
  ];

  const Task = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '45%',
          backgroundColor: item.color,
          padding: 10,
          margin: 10,
          borderRadius: 15,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '600',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 14,
                fontWeight: '500',
                marginTop: 5,
              }}>
              {item.count} Task
            </Text>
          </View>
          <View>
            <ArrowCircleRight2 size="28" color={AppColors.GRAY} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({item}) => <Task item={item} />}
      />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            margin: 10,
            marginHorizontal: 20,
          }}>
          All Tasks{' '}
        </Text>
      </View>
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
export default HeaderComponent;
