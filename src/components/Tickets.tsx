import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Linking,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import { getDateToday, getDateTomorrow, timesstampConverter, timestampRelease } from '../dateGetters';
import { Event, State } from '../types';

var day = getDateToday();
var tomorrow = getDateTomorrow();

function dateFilter(events: Event[], day: string) {
    const results = events.filter(event => {
        let eventDate = null;

        if (event.release != null)
            eventDate = timesstampConverter(event.release.toDate());

        return (eventDate == day)
    });

    return results;
}

type TicketState = {
    loading: boolean,
    event: Event[],
    userEvent: string
}

const Tickets = (props) => {
    const [state, setState] = useState<TicketState>({ loading: true, event: [], userEvent: "" });
    const [currentDate, setCurrentDate] = useState(new Date());

    async function fetchEvents() {
        // Query to Firebase collection 'event'.
        // Filter: 'userClass' (class selected by the user).
        // Why: To create an array of events that has tickets avaible today or tomorrow for the user to be shown at the homescreen,
        const events = await firestore().collection('event').where("who", "array-contains", props.userClass).get();

        var temp: Event[] = [];
        events.forEach(doc => temp.push(doc.data() as Event));

        setState({ event: [...temp], loading: false, userEvent: props.userClass })
    }

    useEffect(() => {
        // Remove past events every minute
        setState({ ...state, event: state.event.filter(e => ( e && e.disappear && currentDate <= e.disappear.toDate() ))})
        const interval = setInterval(() => setCurrentDate(new Date()), 60000)
        return () => clearInterval(interval);
    }, [currentDate]);

    if ((state.event === null || state.userEvent != props.userClass) && props.userClass != "") {
        fetchEvents();
    }

    if (state.loading) {
        return (<View></View>);
    } else {
        const todayArray: Event[] = dateFilter(state.event, day)
        const tomorrowArray: Event[] = dateFilter(state.event, tomorrow)

        return (
        <View style={styles.container}>
            <Text style={styles.biljettsläppText}>Biljettsläpp</Text>
            <View>
                <Today events={todayArray} />
                <Tomorrow events={tomorrowArray} />
                <Text style={styles.dontForgetTicketsText}>Glöm inte att hämta dina reserverade biljetter!!</Text>
            </View>
        </View>);
    }
};

const TicketEvent = (props) => {

    var ticketRelease = props.item.release.toDate();
    var date = new Date();
    let [currentDate, setCurrentDate] = useState(new Date());

    // Updates the item every second in order to make the "Reservera" button appear on time.
    useEffect(() => {
        const interval = setInterval(() => setCurrentDate(new Date()), 1000)
        return () => clearInterval(interval);
    }, [currentDate]);

    if (date >= ticketRelease) {

        return (
            <View style={styles.ticketEvent}>
                <Text style={styles.eventText}>{props.item.name}</Text>
                <ReservButton form={props.item.form}></ReservButton>
            </View>
        );
    }
    else {
        return (
            <View style={styles.ticketEvent}>
                <Text style={styles.eventText}>{props.item.name}</Text>
                <Text style={styles.eventTextTomorrow}>släpps: {timestampRelease(props.item.release.toDate())} </Text>
            </View>
        );
    }
};

const TicketEventTomorrow = (props) => {
    return (
        <View style={styles.ticketEvent}>
            <Text style={styles.eventText}>{props.item.name}</Text>
            <Text style={styles.eventTextTomorrow}>släpps: {timestampRelease(props.item.release.toDate())} </Text>
        </View>
    );
};

// Creates the component with the array of aviable tickets today.
// Built with the items from 'TicketEvent'
const Today = ({ events }: { events: Event[] }) => {
    const todaysEvents = events.map((event, index) => (<TicketEvent item={event} key={index} />));

    return (
        <View>
            <Text style={styles.dateText}>idag, {day}</Text>
            <View style={styles.dateWrapper}>
                <View style={styles.eventList}>
                    {todaysEvents}
                </View>
            </View>
        </View>
    );
};

// Creates the component with the array of aviable tickets tomorrow.
// Built with the items from 'TicketEventTomorrow'
const Tomorrow = ({ events }: { events: Event[] }) => {
    return (
        <View>
            <Text style={styles.dateText}>imorgon, {tomorrow}</Text>
            <View style={styles.dateWrapper}>
                <View style={styles.eventList}>
                    {events.map((event, index) => (<TicketEventTomorrow item={event} key={index} />))}
                </View>
            </View>
        </View>
    );
};


// Button with a link that will take the user to a google form.
// The link will be fetched from the Firebase collection 'event'
// Only handles https. (https://recce.utn.se/)
const ReservButton = (props) => {
    return (
            <TouchableOpacity onPress={() => Linking.openURL(props.form)}
                              style={styles.reservButton}>
                <Text style={styles.reservButtonText}>Reservera</Text>
            </TouchableOpacity>
    );
}


// Redux stuff in order to use the state i.e class and program the user has selected.
const mapStateToProps = (state: State) => ({ userClass: state.userClass });

export default connect(mapStateToProps)(Tickets);


const styles = StyleSheet.create({
    container: {
        borderColor: '#4F4059',
        borderWidth: 1,
        borderRadius: 7
    },
    biljettsläppText: {
        color: '#FF71FF',
        textAlign: 'left',
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 10,
        lineHeight: 22,
        marginTop: 10,
    },
    dateText: {
        color: '#FF71FF',
        textAlign: 'left',
        fontSize: 14,
        paddingLeft: 10,
        lineHeight: 22,
    },
    dateWrapper: {
        alignItems: 'center',
    },
    eventList: {
        width: '95%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    ticketEvent: {
        paddingVertical: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#5E5763',
        borderBottomWidth: 0.8,
    },
    eventText: {
        color: '#FFFFFF',
        padding: 10,
        flexGrow: 1,
        fontSize: 14,
    },
    eventTextTomorrow: {
        color: '#FFFFFF',
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dontForgetTicketsText: {
        color: '#FFF400',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    reservButton: {
        borderRadius: 5,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    reservButtonText: {
        padding: 7,
        color: '#000000',
        fontSize: 14,
    },
    reservButtonContainer: {
        position: 'absolute',
        left: '72%',
        alignSelf: 'center',
    },
});
