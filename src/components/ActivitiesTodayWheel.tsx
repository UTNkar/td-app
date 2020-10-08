import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { activities } from '../static/texts/activities';
import Activity from './Activity';
import { getDateToday } from '../dateGetters';
import { connect } from 'react-redux';
import { State } from '../types';


const ActivitiesTodayWheel = ({ userClass }) => {
    const today = getDateToday();
    const actsToday = activities.filter(({ dates }) => ( dates && dates[today] && (dates[today].length === 0 || dates[today].includes(userClass.toLowerCase()))));

    if (actsToday == null || actsToday.length == 0) {
        return (
            <View style={{ width: '100%', height: 200 }}>
                <Text style={{ ...style.title, marginBottom: 0 }}>Aktiviteter idag</Text>
                <Text style={style.onEmpty}>
                    Idag sker inga aktiviteter. Kom tillbaka igen imorgon!
                </Text>
            </View>
        )
    } else {
        return (
            <View>
                <Text style={style.title}>Aktiviteter idag</Text>
                <ScrollView horizontal={true} style={style.wheel}>
                    {actsToday.map((activity, i) => (
                        <Activity activity={activity} date={today} key={i} />))}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state: State) => ({
    userClass: state.userClass,
    userSection: state.userSection
})

export default connect(mapStateToProps)(ActivitiesTodayWheel);

const style = StyleSheet.create({
    wheel: {
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF71FF',
        marginBottom: 8,
    },
    onEmpty: {
        height: '100%',
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    }
})
