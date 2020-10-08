import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';

type BadgedImageProps = {
    radius: number,
    img: JSX.Element
}

const BadgedImage = (props: BadgedImageProps): JSX.Element => {
    return (<>
                {props.img}
                <View style={{ width: props.radius,
                               height: props.radius,
                               borderRadius: props.radius,
                               ...styles.badge }}/>
            </>)
}


export default BadgedImage;

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        backgroundColor: 'red',
        overflow: 'hidden',
        top: 0,
        right: 1,
    }
});
