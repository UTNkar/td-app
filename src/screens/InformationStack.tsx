import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InfoScreen from './InfoScreen';
import SponsorScreen from './SponsorScreen';
import ReccentralenTimesScreen from './MyScreen_Subcreens/OpeningHours';
import UtnScreen from './UtnScreen';
import NationsScreen from './Nationer';
import ReserveraBiljettScreen from './ReserveraBiljett';
import TentScreen from './Tältet';
import HittaRattScreen from './HittaRatt';
import ReccecentralenScreen from './Reccecentralen';
import CovidScreen from './Covid19';
import Recceenkaten from './Recceenkaten';
import ClassTasks from './ClassTasks';

const InfoStack = createStackNavigator();

const InformationStack = ({ navigation }) => {
    return (
        <InfoStack.Navigator headerMode={'none'} initialRouteName="Info">
            <InfoStack.Screen name="Info" component={InfoScreen} />
            <InfoStack.Screen name="Reservera biljetter" component={ReserveraBiljettScreen} />
            <InfoStack.Screen name="Reccentralen" component={ReccecentralenScreen} />
            <InfoStack.Screen name="Tältet" component={TentScreen} />
            <InfoStack.Screen name="Nationer" component={NationsScreen} />
            <InfoStack.Screen name="Hitta rätt" component={HittaRattScreen} />
            <InfoStack.Screen name="Sponsorer" component={SponsorScreen} />
            <InfoStack.Screen name='Utn' component={UtnScreen} />
            <InfoStack.Screen name='OpeningHours' component={ReccentralenTimesScreen} />
            <InfoStack.Screen name='Covid19' component={CovidScreen} />
            <InfoStack.Screen name='Klassuppdrag' component={ClassTasks} />
            <InfoStack.Screen name='Recceenkaten' component={Recceenkaten} />
        </InfoStack.Navigator>
    );
};
export default (InformationStack);
