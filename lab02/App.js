import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Shaun');
  const [count, setCount] = useState(0);
  const [birthdays, setBirthdays] = useState([]);

  const clickHandler = () => {
    setCount(count + 1);
    setBirthdays(
         birthdays.concat({key: (count + 1).toString()})
       );
  }

  return (
    <View style={styles.container}>
      <br/>
      <Text>Enter name:</Text>
      <br/>
      <TextInput 
        style={styles.TextInput}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />

      <br/>

      <p>{name} is {count} years old.</p>

      <Button title = "BIRTHDAY" onPress={clickHandler}/>

      <br/>

      <FlatList
      keyExtractor={(item) => item.age}
        data={birthdays}
        renderItem={({item}) => (
          <Text>{item.key}</Text>
        )}
      />
    </View>

    
  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
