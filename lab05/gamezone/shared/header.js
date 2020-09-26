import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
    },
})