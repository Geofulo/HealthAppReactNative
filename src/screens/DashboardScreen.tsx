import * as React from 'react';
import { Text, View } from 'react-native';
import useHealthData from '../hooks/useHealthData';

function DashboardScreen(): JSX.Element {
    // const {steps} = useHealthData();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Steps</Text>
        {/* <Text>{steps}</Text> */}

        
        </View>
    );
}

export default DashboardScreen;