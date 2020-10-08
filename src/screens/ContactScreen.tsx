// The contact screen shows contact information to those responsible
// for the reception. It can be navigated to by pressing "Kontakt"
// on 'Min Sida'

import React from 'react';
import { SafeAreaView, Linking, ScrollView, View, StyleSheet, Text } from 'react-native';
import { getClassPeople, getClassPeopleInformation } from '../classInfoGetters';
import TDHeader from '../components/TDHeader';
import TDFooter from '../components/TDFooter';

import { connect } from 'react-redux';
import { State } from '../types';

const programLagText = "Nedan finner du kontaktuppgifter som avser ditt programlag och alltså är specifika för just ditt program. Dessa personer är dina närmsta kontakter och finns för att svara på alla dina frågor och funderingar!";
const mottagningsAnsvariga = "Hit kan du vända dig med frågor angående TD-mottagningen, Faddrar eller de foton som tas av Mediakå.";
const UTN = 'Om du har frågor om UTN eller det dagliga arbetet på kåren, är du välkommen att kontakta ledningsgruppen och styrelsen. Kontaktuppgifter finner du via länken nedan.';

const List = ({ data }) =>
      (data.map((item, key) => (
          <View key={key} style={style.itemContainer}>
              <Text style={style.itemText}>{item.name} </Text>
              {item.title && <Text style={style.itemText}>{item.title}</Text>}
              {item.phone && <Text style={style.itemText}>{item.phone}</Text>}
              {item.mail && <Text style={style.itemText}>{item.mail}</Text>}
              <View style={{marginBottom: 10}}/>
          </View>
      )))

const ContactScreen = ({ userClass }) => {
    const { rk, rk2, fadderk, mediak, propp } = getClassPeople(userClass);
    const people = getClassPeopleInformation(rk, rk2, fadderk, mediak, propp);
    const programLag = [people.fadderk, people.mediak];

    const huvudAnsvariga = [{
        name: 'Projektledare, TD-mottagningen',
        mail: 'projektledare@recce.utn.se',
    }, {
        name: 'Therese Faronius Hofmann',
        title: 'Gruppledare, Fadderkå',
        mail: 'gruppledare-fk@recce.utn.se',
    }, {
        name: 'Gustav Halldén',
        title: 'Gruppledare, Mediakå',
        mail: 'producenten@recce.utn.se',
    },{
        name: 'Hannes Thorell',
        title: 'Huvudpropp, Proppen',
        mail: 'huvudpropp@utn.se',
    },{
        name: 'Victor Eriksson',
        title: 'Vice Huvudpropp, Proppen',
        mail: 'vicehuvudpropp@utn.se',
    }]

    return(
        <SafeAreaView style={style.background}>
            <TDHeader />
            <ScrollView style={style.wrapper}>
                <View style={style.container}>
                    <Text style={style.title}>Kontakt</Text>
                    <Text style={style.descriptionTitle}>PROGRAMLAG</Text>
                    <Text style={style.description}>{programLagText}</Text>
                    <List data={programLag}/>
                    <Text style={style.descriptionTitle}>MOTTAGNINGENS HUVUDANSVARIGA</Text>
                    <Text style={style.description}>{mottagningsAnsvariga}</Text>
                    <List data={huvudAnsvariga}/>
                    <Text style={style.descriptionTitle}>UTNs Ledningsgrupp och styrelse</Text>
                    <Text style={style.description}>{UTN}</Text>
                    <Text onPress={() => Linking.openURL('www.utn.se/kontakt')}style={style.itemTextBold}>www.utn.se/sv/kontakt</Text>
                </View>
            </ScrollView>
            <TDFooter/>
        </SafeAreaView>
    )
}

const mapStateToProps = (state: State) => ({
    userClass: state.userClass,
    userSection: state.userSection
})

const ConnectedContacts = connect(mapStateToProps)(ContactScreen);
export default ConnectedContacts;

const style = StyleSheet.create({
    background: {
        backgroundColor: "#342A3B",
        flex: 1,
    },
    descriptionTitle: {
        marginTop: 30,
        fontSize: 16,
        lineHeight: 17,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 17,
        fontStyle: 'italic'
    },
    wrapper: {
        flex: 1,
        padding: '4%'
    },
    container: {
        backgroundColor: '#FF71FF',
        width: '100%',
        height: '100%',
        padding: '5%',
    },
    title: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itemContainer: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        flexDirection: 'column',
        marginVertical: 5,
    },
    itemLeft: {
        height: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    itemRight: {
        height: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    itemText: {
        color: 'white',
        fontSize: 16,
        textAlignVertical: 'center'
    },
    itemTextBold: {
        color: 'white',
        fontSize: 16,
        textAlignVertical: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    itemSeparator: {
        flex: 1,
    }
})
