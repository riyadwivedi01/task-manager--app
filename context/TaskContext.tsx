// import React, { createContext, ReactNode, useContext, useState } from 'react';

// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   completed: boolean;
// }

// interface TaskContextType {
//   tasks: Task[];
//   addTask: (task: Task) => void;
//   deleteTask: (id: string) => void;
//   toggleComplete: (id: string) => void;
// }

// const TaskContext = createContext<TaskContextType | undefined>(undefined);

// export const TaskProvider = ({ children }: { children: ReactNode }) => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const addTask = (task: Task) => setTasks(prev => [task, ...prev]);
//   const deleteTask = (id: string) => setTasks(prev => prev.filter(task => task.id !== id));
//   const toggleComplete = (id: string) => {
//     setTasks(prev =>
//       prev.map(task =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export const useTaskContext = () => {
//   const context = useContext(TaskContext);
//   if (!context) throw new Error('useTaskContext must be used within TaskProvider');
//   return context;
// };

// app/context/TaskContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks(prev => [...prev, task]);

  const deleteTask = (id: string) => setTasks(prev => prev.filter(t => t.id !== id));

  const toggleComplete = (id: string) =>
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within TaskProvider');
  return context;
};



