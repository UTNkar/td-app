import React from 'react';
import { Overlay } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';


export function openModal(nr: number, funcs: Array<Function>) {
    closeAllModals(funcs);
    funcs[nr](true);
}

function closeAllModals(funcs: Array<Function>) {
    for (var i = 0; i < 4; i++)
        closeModal(i, funcs);
}

function closeModal(nr: number, funcs: Array<Function>) {
    funcs[nr](false);
}

export const SpeechBubble = (props) => {
    return (
        <Overlay isVisible={props.isVisible}
            onBackdropPress={() => closeModal(props.nr, props.funcs)}
            overlayStyle={style.speechBubble}
                 overlayBackgroundColor={props.color}>
            <>
                <Text style={style.quote}>{props.info.quote}</Text>
                <Text style={style.name}>{props.info.name}</Text>
                <Text style={style.title}>{props.info.title}</Text>
                {(props.info.phone || props.info.mail) && <Text style={{...style.title, marginVertical: 20}}>{props.info.phone}{'\n'}{props.info.mail}</Text>}
            </>
        </Overlay>
    );
}

const style = StyleSheet.create({
    speechBubble: {
        height: 'auto',
        width: '95%',
        borderRadius: 20,
        position: 'absolute',
        bottom: 80,
    },
    quote: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        margin: 20,
    },
    name: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 18,
        textAlign: 'right',
        marginHorizontal: 20,
    },
    title: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 14,
        textAlign: 'right',
        marginHorizontal: 20,
    },
    contact: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'right'
    }
});
