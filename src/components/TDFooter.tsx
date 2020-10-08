import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const TDFooter = () => {
    return(
        <View style={style.container}>
            <Image source={require('../static/images/poweredByDka.png')} style={style.image}/>
        </View>
    )
}
export default TDFooter;

const style = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#342A3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '40%',
        resizeMode: 'contain'
    }

})
