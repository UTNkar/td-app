import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = (props: { color: string; width: string | number }) => {
    return (<View style={{...style.divider, borderBottomColor: props.color, width: props.width}}/>)
}

const style = StyleSheet.create({
    divider: {
        borderBottomWidth: 1,
        alignSelf: 'center',
        width: '90%',
        height: 0,
        borderBottomColor: '#707070'
    },
})

export default Divider;
