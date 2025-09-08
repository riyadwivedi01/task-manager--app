// import { Tabs } from 'expo-router';
// import { TaskProvider } from '../context/TaskContext';

// export default function RootLayout() {
//   return (
//     <TaskProvider>
//       <Tabs screenOptions={{ headerShown: false }}>
//         <Tabs.Screen
//           name="(tabs)"
//           options={{ href: null }} // prevent (tabs) showing as a tab
//         />
//       </Tabs>
//     </TaskProvider>
//   );
// }


import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TaskProvider } from '../context/TaskContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <StatusBar style="auto" />
        <Slot />
      </TaskProvider>
    </SafeAreaProvider>
  );
}


