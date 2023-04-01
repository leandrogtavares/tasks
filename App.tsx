import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const [task, setTask] = useState<string>('')

  function onChangeTextHandler(text: string) : void {
    setTask(text)
    console.log('task: ', task);
  }

  function onAddTaskHandler() : void {
    setTasks([...tasks, task])
    console.log('tarefa adicionada: ', task);
  }

  const onClearHandler = () => {
    setTask('')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>Tasks</Text>
        <View style={{ width: '100%' }}>
          <TextInput
            style={{ backgroundColor: 'white', height: 40, marginBottom: 10 }}
            placeholder='add a task'
            onChangeText={onChangeTextHandler}
            defaultValue={task}
          />
          <Button title="add" onPress={onAddTaskHandler} />
          <Button title="clear" onPress={onClearHandler } />
        </View>
      </View>
      <View>
        {tasks.map(t => <Text key={t.toString()}>{t}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'flex-start',


  },
});
