import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Lab 3', key: '1'},
    {text: 'Homework 1', key: '2'},
    {text: 'Project 1', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }
    else {
      Alert.alert('OOPS!', 'ToDos must be over three chars long', [
        {text: 'Understood', onPress: () => console.log('Alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback>
      <View style = {styles.container}>
        
        <Header />
        <View style = {styles.content}>
          
          <AddTodo submitHandler={submitHandler}/>
          <View style = {styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
})
