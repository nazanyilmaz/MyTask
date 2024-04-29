//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import FAB from '../../components/ui/FAB';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';
import HeaderComponent from '../../components/home/headerComponent';

// create a component
const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [complated, setComplated] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(savedTask));
      console.log(tasks);
      let comlatedCount = 0;
      let PendingCount = 0;
      let onGoingCount = 0;
      let CancelCount = 0;
      for (const task of JSON.parse(savedTask)) {
        if (task.status === 1) {
          onGoingCount++;
        }
        if (task.status === 2) {
          PendingCount++;
        }
        if (task.status === 3) {
          comlatedCount++;
        }
        if (task.status === 4) {
          CancelCount++;
        }
        setComplated(comlatedCount);
        setOngoing(onGoingCount);
        setPending(PendingCount);
        setCancel(CancelCount);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    getTask();
    setRefreshing(false);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        ListHeaderComponent={
          <HeaderComponent
            ongoing={ongoing}
            pending={pending}
            complated={complated}
            cancel={cancel}
          />
        }
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FAB onPress={() => navigation.navigate(ADDTASKS)} />
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
export default Home;
