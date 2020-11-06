import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Game ID: { route.params.gameid }</Text>
                <Text>Score: { route.params.score }</Text>
                <Text>Player: { route.params.name }</Text>
            </Card>
        </View>
    );
}
