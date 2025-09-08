import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Task } from '../context/TaskContext';

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export default function TaskItem({ task, deleteTask, toggleComplete }: Props) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.title}>{task.completed ? '✅ ' : ''}{task.title}</Text>
      <Text>{task.description}</Text>
      <View style={styles.buttons}>
        <Button title={task.completed ? 'Undo' : 'Done'} onPress={() => toggleComplete(task.id)} />
        <Button title="Delete" color="red" onPress={() => deleteTask(task.id)} />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   taskContainer: { padding: 12, borderBottomWidth: 1, borderColor: '#ccc' },
//   title: { fontWeight: 'bold' },
//   buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
// });



const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

