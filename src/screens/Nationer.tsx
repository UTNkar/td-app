import React from 'react';
import {
    Dimensions,
    Image,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';

const WIDTH = Dimensions.get('window').width;
const infoText = `Efter måndagens Upprop kommer Reccen få chans att gå med i Uppsala teknolog- och naturvetarkår och samtidigt kan Reccen skriva in sig på nation. Uppsala har inte mindre än 13 nationer och Φ Rekåmmenderar å det mullersta att Reccen går med i minst en. Vilken eller vilka Reccen väljer i början har inte en alltför stor inverkan på Reccens kommande studentliv, eftersom medlemskap i en av dem ger en frän access till allihopa. Skulle Reccen sedan upptäcka att åh mullrans det har valts fel av odefinierad anledning, kan Reccen byta inom en rimlig tidsrymd. Reccen bör således inte oroa sig alltför mycket, men det kan vara Φ-Φigt att gå med i en vars namn ligger Reccen nära till sin geografiska hembygd. Att vara med i en nation ger Reccen möjlighet att delta på alla festligheter och andra kuligheter som nationerna ordnar.`

const HeaderImage = ({ source }) => (<Image source={source}
    style={style.headerImage}
/>)

const UtnScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={style.safeContainer}>
            <TDHeader />
            <View style={style.container}>
                <ScrollView style={style.scroller}>
                    <HeaderImage source={require('../static/images/info/NationerFull.jpg')} />
                    <View style={style.top}>
                        <View>
                            <Text style={style.title}>Nationer</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(www.nationsguiden.se)}>
                                <Text style={style.subtitle}>www.nationsguiden.se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Divider color={'white'} width={WIDTH - 30} />
                    <Text style={style.infoText}>
                        {infoText}
                    </Text>
                    <Text style={style.infoText}>Reccen hittar instruktioner för att gå med i nationerna och kåren <Text style={{ color: 'lightblue' }}onPress={() => Linking.openURL('https://recce.utn.se/sites/default/files/bilder_2019/random/medlem_utn.pdf')}>HÄR</Text></Text>
                    <Text style={style.infoText}>På nation ordnas inte bara mottagningens större fester, många nationer ordnar pub och klubb under veckorna. Nationerna har även många föreningar och körer. Φ vill även tipsa om att många nationer har bostäder ifall Reccen ännu inte skaffat sig ett nytt, mustigt och krypinnerligt plejs att sova på.</Text>
                    <Text style={{...style.infoText, fontWeight: 'bold'}}>För att Reccen ska kunna skapa sig en ännu bättre bild av Uppsalas nationsliv kan Reccen med fördel spana in den nationsguide som Φ har besvärjat fram, och som Reccen återfinner alldeles precis <Text style={{ color: 'lightblue'}}onPress={() => Linking.openURL('https://recce.utn.se/sv/bra-att-veta/nationer/fs-nationsguide')}>HÄR</Text></Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default UtnScreen
const style = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#342A3B',
    },
    container: {
        flex: 1,
        backgroundColor: '#342A3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroller: {
        flex: 1
    },
    headerImage: {
        height: WIDTH * 0.69,
        width: WIDTH,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    title: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 15,
        fontSize: 16,
        color: 'white',
        fontStyle: 'italic',
        marginTop: 0,
    },
    social: {
        flexDirection: 'row',
    },
    icon: {
        height: 30,
        width: 30,
        marginLeft: 13,
        marginTop: 10,
    },
    infoText: {
        color: 'white',
        margin: 15,
        fontSize: 14,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#084798',
        width: 140,
        height: 43,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowRadius: 10,
        margin: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    }
});
