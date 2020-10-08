import React, {useState, useRef} from 'react';
import { Animated, View, Text, StyleSheet, Image } from "react-native";
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { setUserClassPeople, userClassAction, userSectionAction, userTokenAction } from '../redux/actionTypes';
import { connect } from 'react-redux';
import { getSectionImage } from '../imageGetters';
import { Dispatch } from 'redux';
import { State } from '../types';
import CircleImage from './CircleImage'
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';


type ClassButtonProps = {
    onPress: () => void;
    selected: boolean;
    className: string;
}

type ClassSelectionItemProps = {
    currentSelected: string;
    section: string;
    sectionFullName: string;
    userClass: string;
    setUserClass: (userClass: string, sectionName: string) => void;
    setCurrentSelected: (userClass: string) => void;
    classes?: Array<{ className: string }>;
}

const ClassButton = ( props: ClassButtonProps ): JSX.Element => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}
                                  style={{paddingRight: 10}}>
            <View>
                <Text style={props.selected ? style.classButtonAct : style.classButton}>{props.className}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

function ClassSelectionItem(props: ClassSelectionItemProps): JSX.Element {
    const slideAnim = useRef(new Animated.Value(70)).current;
    const imageAnim = useRef(new Animated.Value(1)).current;
    const textSizeAnim = useRef(new Animated.Value(20)).current;
    const lineHeightAnim = useRef(new Animated.Value(24)).current;
    const selected = props.currentSelected === props.section;
    const faded = props.currentSelected != null && !selected
    const animationTime = 200;

    if (selected) {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 130,
                duration: animationTime,
                useNativeDriver: false,
            }),

            Animated.timing(imageAnim, {
                toValue: 1.2,
                duration: animationTime,
                useNativeDriver: false,
            }),

            Animated.timing(textSizeAnim, {
                toValue: 24,
                duration: animationTime,
                useNativeDriver: false,
            }),

            Animated.timing(lineHeightAnim, {
                toValue: 28,
                duration: animationTime,
                useNativeDriver: false,
            }),
        ]).start();
    } else {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: 70,
                duration: animationTime,
                useNativeDriver: false,
            }),

            Animated.timing(imageAnim, {
                toValue: 1.0,
                duration: animationTime,
                useNativeDriver: false,
            }),

            Animated.timing(textSizeAnim, {
                toValue: 20,
                duration: animationTime,
                useNativeDriver: false,
            }),

            Animated.timing(lineHeightAnim, {
                toValue: 24,
                duration: animationTime,
                useNativeDriver: false,
            }),
        ]).start();
    }

    const toggleSelectedClass = (className: string, sectionName: string): void => {
        if (props.userClass === className) {
            props.setState("", "");
        } else {
            props.setState(className, sectionName);
        }
    }

    return (
        <Animated.View style={[style.animatedContainer, { height: slideAnim }]}>
            <TouchableWithoutFeedback style={style.sectionContainer}
                                      onPress={(): void => props.setCurrentSelected(props.section)}>
                <View style={style.sectionButton}>
            <Animated.View style={[style.sectionImage, { transform: [{ scale: imageAnim }] }]}>

            <CircleImage img={getSectionImage(props.section)} width={60} radius={60}/>
                    </Animated.View>
                    <Animated.Text style={[(selected ? style.sectionTextSelected
                                            : (faded ? style.sectionTextFaded
                                               : style.sectionText)),
                                           { fontSize: textSizeAnim, lineHeight: lineHeightAnim }]}>
                        {props.section + " - " + props.sectionFullName}
                    </Animated.Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={style.classButtonContainer}>
                {props.classes?.map(({ className } , i) =>
                    {return <ClassButton className={className}
                                         key={i}
                                         onPress={(): void => {toggleSelectedClass(className, props.section)}}
                                         selected={className === props.userClass}
                            />})}
            </View>
        </Animated.View>
    );
};

const mapStateToProps = (state: State): { userClass: string } => ({ userClass: state.userClass });
const mapDispatchToProps = (dispatch: Dispatch) =>
      ({
          setState: async (sectionClass, sectionName): void => {
              dispatch(userTokenAction(await messaging().getToken()));
              dispatch(userClassAction(sectionClass));
              dispatch(userSectionAction(sectionName));
              dispatch(setUserClassPeople(sectionClass));
          }
      });

export default connect(mapStateToProps, mapDispatchToProps)(ClassSelectionItem);

const style = StyleSheet.create({
    animatedContainer: {
        overflow: 'hidden',
    },
    sectionButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionContainer: {
        paddingVertical: 10,
        paddingLeft: 40,
    },
    sectionImage: {
        overflow: 'hidden',
        borderRadius: 0,
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    sectionText: {
        color: 'white',
        flexWrap: 'wrap',
        fontSize: 20,
        lineHeight: 24,
        marginHorizontal: 20,
        width: '80%'
    },
    sectionTextSelected: {
        color: 'white',
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        width: '80%'
    },
    sectionTextFaded: {
        fontSize: 20,
        lineHeight: 24,
        color: '#707070',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        width: '80%'
    },
    classButton: {
        paddingVertical: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
        borderRadius: 5,
        borderColor: '#857F89',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    classButtonAct: {
        paddingVertical: 10,
        backgroundColor: '#857F89',
        borderColor: '#857F89',
        borderWidth: 1,
        borderRadius: 5,
        color: 'white',
        fontSize: 18,
        paddingHorizontal: 10,
    },
    classButtonContainer: {
        marginLeft: 120,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
});
