import React from 'react';
import {Dimensions,
        Image,
        StyleSheet,
        Text,
        View,
        ScrollView,
        SafeAreaView,
        TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Divider from '../../components/Divider';
import DigikaImages from '../../static/images/digitaliseringskommitten/';
import { dkText } from '../../static/texts/dkText';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const dkShortText = dkText["shortText"];
const dkLongText = dkText["longText"];
const dkImgText = dkText["imgText"];

function MenuButton(): JSX.Element {
  const navigation = useNavigation<DrawerNavigationProp<DrawerScreens>>();
  return (
    <TouchableOpacity onPress={(): void => navigation.openDrawer()}>
      <View style={style.headerButtonContainer}>
        <Icon name="bars" color="#77FF01" size={20} />
      </View>
    </TouchableOpacity>
  );
}

function BackButton(): JSX.Element {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={(): void => navigation.goBack()}>
      <Image
        style={style.backIcon}
        source={DigikaImages['BACK']}/>
    </TouchableOpacity>
  );
}

const Digitaliseringskommitten = ({ navigation }) => {
  return(
    <SafeAreaView style = {style.safeContainer}>
      <View style={style.container}>
        <View style={style.topRow}>
          <View style={style.topRowLeft}>
            <MenuButton/>
          </View>
            <View style={style.topRowMiddle}>
              <View style={{flex: 1}}>
                <Image
                  style={style.topRowImage}
                  source={DigikaImages['REMSATOP']}/>
              </View>
              <View style={{flex: 1}}></View>
            </View>
          <View style={style.topRowRight}>
           <BackButton/>
          </View>
        </View>
        <View style={style.middleRow}>
          <View style={style.sidePanel}>
            <Image
              style={style.leftRowImage}
              source={DigikaImages['REMSASIDE']}/>
          </View>
          <View style={style.scrollPanel}>
          <ScrollView style={style.scroller}>
            <View style={style.topBox}>
              <Image
                style={style.topImage}
                source={DigikaImages['TOP']}/>
              <Text style={style.topText}>{dkShortText}</Text>
            </View>
            <View style={style.groupBox}>
              <Image
                style={style.groupImage}
                source={DigikaImages['PHOTO']}/>
              <Text style={style.groupText}>{dkImgText}</Text>
            </View>
            <View style={style.infoBox}>
              <Divider color={ '#77FF01' } width={WIDTH-60}/>
              <Text style={style.infoText}>
              {dkLongText}
              </Text>
              <Image
                style={style.fillurImage}
                source={DigikaImages['FILLUR']}/>
            </View>
          </ScrollView>
          </View>
          <View style={style.sidePanel}>
            <Image
              style={style.rightRowImage}
              source={DigikaImages['REMSASIDE']}/>
          </View>
        </View>
        <View style={style.bottomRow}>
          <Image
            style={style.bottomRowImage}
            source={DigikaImages['REMSATOP']}/>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Digitaliseringskommitten;

const style = StyleSheet .create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerButtonContainer: {
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  backIcon: {
    alignSelf: 'center',
    height: 21,
    width: 17
  },
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#B6A7FF',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize:24,
  },
  dummy: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize:24,
  },
  scroller:{
    flex:1,
  },
  topRow:{
    flex: 2,
    flexDirection: 'row',
  },
  topRowLeft:{
    flex: 1,
    justifyContent: 'center'
  },
  topRowMiddle:{
    flex: 10,
  },
  topRowRight:{
    flex: 1,
    justifyContent: 'center',
    margin: 2
  },
  topRowImage:{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  middleRow:{
    flex: 40,
    flexDirection: 'row',
  },
  sidePanel:{
    flex: 1,
  },
  leftRowImage:{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  rightRowImage:{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    transform: [{ rotate: '180deg'}],
  },
  scrollPanel:{
    flex: 20
  },
  bottomRow:{
    flex: 1,
  },
  bottomRowImage:{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    transform: [{ rotate: '180deg'}],
  },
  topBox:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
    marginBottom: 20
  },
  topImage:{
    alignSelf:'center',
    marginTop: 10,
    width: WIDTH*0.8,
    height: WIDTH*0.59*0.8,
  },
  topText: {
    color: 'white',
    fontSize: 12,
    width: '50%',
    textAlign: 'right',
    position: 'absolute',
    right: 30,
    bottom: 10
  },
  groupBox:{
    height: 200,
    padding: 15
  },
  groupImage:{
    height: 200,
    width: '100%',
  },
  groupText:{
    color: 'white',
    fontSize: 8,
    width: WIDTH*0.7,
    position: 'absolute',
    bottom: 0,
    left: 20
  },
  infoBox: {
    marginTop: 30,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  fillurImage:{
    height: 120,
    width: 155,
    alignSelf: 'flex-end',
    marginTop: 20,
    paddingBottom: 100,
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
    margin: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  }
});
