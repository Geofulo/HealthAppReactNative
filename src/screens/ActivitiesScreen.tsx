import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';
import useActivitiesData from '../hooks/useActivitiesData';
import _ from 'lodash';

type ActivitySection = {
    title: string,
    data: []
}

function ActivitiesScreen(): JSX.Element {
    const {activities, loadingActivities} = useActivitiesData();

    const group = _.groupBy(activities, (e) => {
        return e.activity;
    });    
    const sections = Object.keys(group).map((item) => {
        return {
            title: item,
            data: group[item]
        }
    });

    return (
        <SafeAreaView>
            <SectionList
                style={styles.activitiesList}
                sections={sections}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({item}) => (
                    <View style={styles.activityCard}>
                        <Text style={styles.activityDescription}>{item.description}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.activityTitle}>{title}</Text>
                )}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    activitiesList: {
        paddingHorizontal: 20
    },
    activityCard: {
        // flex: 1, 
        // flexDirection: 'row',
        alignItems: 'flex-start',        
    },
    activityTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    activityDescription: {
        fontSize: 14,
        // fontWeight: 'bold'
    }
});

export default ActivitiesScreen;