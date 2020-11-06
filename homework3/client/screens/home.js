import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://young-sands-28296.herokuapp.com/games')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={globalStyles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList data={data} 
                //keyExtractor={({ id }, index) => id.toString()} 
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>Game ID:{ item.gameid }</Text>
                            <Text>Player: { item.name }</Text>
                        </Card>
                    </TouchableOpacity>
                )} />
            )}
        </View>
    );
}
