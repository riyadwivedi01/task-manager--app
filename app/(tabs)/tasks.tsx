import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from '../../components/TaskItem'; // your custom task component
import { useTaskContext } from '../../context/TaskContext'; // 👈 adjust path as needed

const TasksScreen = () => {
  const { tasks, deleteTask, toggleComplete } = useTaskContext(); // 👈 use context

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task List</Text>
      <FlatList   
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet.</Text>}
      />
    </View>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#888' },
});



