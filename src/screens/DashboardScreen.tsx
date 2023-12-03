import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useHealthData from '../hooks/useHealthData';

function DashboardScreen(): JSX.Element {
    const {steps} = useHealthData();

    return (
        <View style={styles.view}>
        <Text>Steps</Text>
        <Text style={styles.stepsCount}>{steps}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    stepsCount: {
        fontSize: 40,
        fontWeight: 'bold'
    },
});

export default DashboardScreen;