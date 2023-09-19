import React from 'react';
import { SafeAreaView } from 'react-native';
import Canvas from 'react-native-canvas';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas style={{ width: '100%', height: '100%', backgroundColor: 'black' }} />
    </SafeAreaView>
  );
}