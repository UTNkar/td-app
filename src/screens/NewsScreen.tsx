import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import TDHeader from '../components/TDHeader';
import Divider from '../components/Divider';
import NewsList from '../components/NewsList';

const NewsHeader = () => (<View style={{ marginBottom: 20 }}>
                                  <Text style={style.title}>Notiser</Text>
                                  <Divider color='red' width='100%' />
                              </View>
                          );

const NewsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#342A3B' }}>
            <TDHeader/>
            <View style={style.screenContainer}>
                <NewsList header={NewsHeader}
                          navigation={navigation}/>
            </View>
        </View>
    );
};

export default NewsScreen
const style = StyleSheet.create({
    screenContainer: {
        marginHorizontal: 15,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 30,
        marginBottom: 10,
    }
})
