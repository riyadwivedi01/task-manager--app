// app/(tabs)/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#4facfe', '#00f2fe']}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to Task Manager</Text>

      <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4276/4276743.png' }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/tasks')}>
        <Ionicons name="list" size={24} color="#fff" />
        <Text style={styles.buttonText}>View Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/add-task')}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Add New Task</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile')}>
        <Ionicons name="person" size={24} color="#fff" />
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: '80%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});


// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useRouter } from 'expo-router';
// import React from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function HomeScreen() {
//   const router = useRouter();

//   return (
//     <LinearGradient
//       colors={['#4facfe', '#00f2fe']}
//       style={styles.container}
//     >
//       <Text style={styles.title}>Welcome to Task Manager</Text>

//       <Image
//         source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4276/4276743.png' }}
//         style={styles.image}
//       />

//       {/* View Tasks */}
//       <TouchableOpacity style={styles.button} onPress={() => router.push('/tasks')}>
//         <View style={styles.row}>
//           <Ionicons name="list" size={22} color="#fff" />
//           <Text style={styles.buttonText}>View Tasks</Text>
//         </View>
//       </TouchableOpacity>

//       {/* Add Task */}
//       <TouchableOpacity style={styles.button} onPress={() => router.push('/add-task')}>
//         <View style={styles.row}>
//           <Ionicons name="add-circle-outline" size={22} color="#fff" />
//           <Text style={styles.buttonText}>Add New Task</Text>
//         </View>
//       </TouchableOpacity>

//       {/* Profile */}
//       <TouchableOpacity style={styles.button} onPress={() => router.push('/profile')}>
//         <View style={styles.row}>
//           <Ionicons name="person" size={22} color="#fff" />
//           <Text style={styles.buttonText}>Profile</Text>
//         </View>
//       </TouchableOpacity>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   image: {
//     width: 140,
//     height: 140,
//     marginBottom: 30,
//   },
//   button: {
//     backgroundColor: '#2196F3',
//     paddingVertical: 14,
//     paddingHorizontal: 25,
//     borderRadius: 12,
//     marginVertical: 10,
//     width: '80%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center', // <-- aligns icon + text vertically
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 17,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });
