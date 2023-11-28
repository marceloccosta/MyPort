import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import axios from "axios";

function Home() {
    return (
        <View style={styles.container}>
            <Text>This is my portfolio!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default Home;