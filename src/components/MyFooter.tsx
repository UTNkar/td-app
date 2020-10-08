import React, { useState, FC } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getRekaImage, getFadderkaImage, getMediakaImage } from '../imageGetters';

import { openModal, SpeechBubble } from './SpeechBubble';
import { connect } from 'react-redux';
import { State } from '../types';
import { getClassPeopleInformation } from '../classInfoGetters';

const FirstImage: FC = (props: any) => {
    if (props.rk != "Ingen") {
        return (
            <View>
                <TouchableOpacity onPress={() => openModal(3, props.funcs)}>
                    <View style={style.imageContainer}>
                        <Image source={props.img} style={style.image} />
                    </View>
                </TouchableOpacity>
                <SpeechBubble color={'#4D1C77'}
                    info={props.info}
                    nr={3}
                    isVisible={props.isVisible}
                    funcs={props.funcs} />
            </View>)
    } else
    return null;
}


const MyFooter = (props: any) => {
    const rk = props.userClassPeople.rk;
    const rk2 = props.userClassPeople.rk2;
    const fk = props.userClassPeople.fadderk;
    const mk = props.userClassPeople.mediak;
    const prp = props.userClassPeople.propp;

    const speechbubbleInfo = getClassPeopleInformation(rk, rk2, fk, mk, prp);

    const rkImgRef = getRekaImage(rk);
    var rk2ImgRef;
    if (rk2 != "Ingen")
        rk2ImgRef = getRekaImage(rk2);
    const fkImgRef = getFadderkaImage(fk);
    const mkImgRef = getMediakaImage(mk);

    // State for showing the four speech bubbles.
    var [isVisible_1, setIsVisible_1] = useState(false);
    var [isVisible_2, setIsVisible_2] = useState(false);
    var [isVisible_3, setIsVisible_3] = useState(false);
    var [isVisible_4, setIsVisible_4] = useState(false);
    const funcs = [setIsVisible_1, setIsVisible_2, setIsVisible_3, setIsVisible_4];

    return (
        <View style={rk2=="Ingen" ? style.containerThreeImages : style.containerFourImages}>
            {/* <View style={style.insideContainer}> */}
            <FirstImage rk={rk2} info={speechbubbleInfo.rek2} img={rk2ImgRef} funcs={funcs} isVisible={isVisible_4} />

            <TouchableOpacity onPress={() => openModal(0, funcs)}>
                <View style={style.imageContainer}>
                    <Image source={rkImgRef} style={style.image} />
                </View>
            </TouchableOpacity>
            <SpeechBubble color={'#4D1C77'}
                info={speechbubbleInfo.rek}
                nr={0}
                isVisible={isVisible_1}
                funcs={funcs} />

            <TouchableOpacity onPress={() => openModal(1, funcs)}>
                <View style={style.imageContainer}>
                    <Image source={fkImgRef} style={style.image} />
                </View>
            </TouchableOpacity>
            <SpeechBubble color={'#FF71FF'}
                info={speechbubbleInfo.fadderk}
                nr={1}
                isVisible={isVisible_2}
                funcs={funcs} />

            <TouchableOpacity onPress={() => openModal(2, funcs)}>
                <View style={style.imageContainer}>
                    <Image source={mkImgRef} style={style.image} />
                </View>
            </TouchableOpacity>
            <SpeechBubble color={'#15B700'}
                info={speechbubbleInfo.mediak}
                nr={2}
                isVisible={isVisible_3}
                funcs={funcs} />
                {/* </View> */}
        </View>
    )
}

const mapStateToProps = (state: State) => ({
    userClass: state.userClass,
    userSection: state.userSection,
    userClassPeople: state.userClassPeople,
})
export default connect(mapStateToProps)(MyFooter);


const imageSize = 55; // This will take the size of the images, to be updated!
const style = StyleSheet.create({
    containerFourImages: { // This is if there are 4 images in the footer.
        minHeight: 60,
        backgroundColor: '#342A3B',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '8%',
        paddingVertical: '3%'
    },
    containerThreeImages: { // This is if there are only 3 images in the footer. Double padding.
        minHeight: 60,
        backgroundColor: '#342A3B',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '16%',
        paddingVertical: '3%'
    },
    insideContainer: {
        width: '80%',
        backgroundColor: 'yellow'
    },
    imageContainer: {
        height: imageSize,
        width: imageSize,
    },
    text: {
        fontSize: 30,
        color: 'white',
    },
    image: {
        borderRadius: imageSize / 2,
        height: imageSize,
        width: imageSize,
    },
    moleImage: {
        height: 70,
        width: 70,
        position: 'absolute',
        bottom: "-50%",
        left: "-50%"
    }
})
