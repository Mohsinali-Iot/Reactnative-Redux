import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button,Text, TextInput, View } from 'react-native';
import store from './store'
import Home from './containers/Home'

import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
      </Provider>
  );
}