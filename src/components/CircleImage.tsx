import React, { FC } from 'react';
import { View, Image } from 'react-native';

type CircleImageProps = {
    radius: number;
    img: any;
    width: string | number;
}

const CircleImage: FC<CircleImageProps> = ({ width = '100%', radius, img }): JSX.Element => {
    return (<View style={{ overflow: 'hidden', borderRadius: radius, width: width, height: width, alignSelf: 'center' }}>
        <Image source={img}
               style={{ width: '100%', height: '100%'}}
               resizeMode={'cover'}/>
            </View>)
}

export default CircleImage;
