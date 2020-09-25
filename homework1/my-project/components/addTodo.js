import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput 
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
        style={styles.input}
      />
      <Button onPress={() => submitHandler(text)} title='add todo' color='coral'/>
    </View>
  );
}

const styles = StyleSheet.create ({
  input: {
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
})