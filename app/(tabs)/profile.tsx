import { Entypo, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const savedName = await AsyncStorage.getItem('profile_name');
      const savedEmail = await AsyncStorage.getItem('profile_email');

      const isValid = !!savedName?.trim() && !!savedEmail?.trim();

      if (isValid) {
        setName(savedName!);
        setEmail(savedEmail!);
        // setIsProfileSaved(true);
        setIsEditing(false);
      } else {
        // setIsProfileSaved(false);
        setIsEditing(true);
      }
    };

    loadProfile();
  }, []);

  const saveProfile = async () => {
    if (!name.trim() || !email.trim()) return;
    await AsyncStorage.setItem('profile_name', name);
    await AsyncStorage.setItem('profile_email', email);
    // setIsProfileSaved(true);
    setIsEditing(false);
  };

  const resetProfile = async () => {
    await AsyncStorage.removeItem('profile_name');
    await AsyncStorage.removeItem('profile_email');
    setName('');
    setEmail('');
    // setIsProfileSaved(false);
    setIsEditing(true);
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <Text style={styles.header}>Create Your Profile</Text>
          <TextInput
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
          />
          <TouchableOpacity onPress={saveProfile} style={styles.saveButton}>
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.header}>Your Profile</Text>
          <Text style={styles.detail}>
            <Ionicons name="person" size={20} /> Name: {name}
          </Text>
          <Text style={styles.detail}>
            <Entypo name="email" size={18} /> Email: {email}
          </Text>
          <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.editButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetProfile} style={styles.resetButton}>
            <Text style={styles.resetText}>Reset Profile</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F9FA',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00695C',
    marginBottom: 20,
  },
  input: {
    borderColor: '#B2DFDB',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  detail: {
    fontSize: 16,
    marginVertical: 8,
    paddingHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#009688',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#00796B',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  resetButton: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  resetText: {
    color: '#C62828',
    fontWeight: 'bold',
  },
});
