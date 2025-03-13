import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../services/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function LoginScreen({ navigation }: any) {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigation.replace('Home');
    } catch (error) {
      console.error('Google login failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to Routiner</Text>
      <Button title="Sign in with Google" onPress={handleGoogleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
