import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const TDStack = createStackNavigator();

import WeAreTDScreen from './WeAreTDScreen';
import Reka from './Reka';
import Fadderka from './Fadderka';
import Mediaka from './Mediaka';
import Rekait from './Rekait';
import Fadderkait from './Fadderkait';
import Mediakait from './Mediakait';
import Propparna from './Propparna';
import Gruppkoordinatorerna from './Gruppkoordinatorerna';
import Faddrar from './Faddrar';

const TDScreen = ({ navigation }) => {
  return (
          <TDStack.Navigator headerMode={'none'}>
            <TDStack.Screen name="TD" component={WeAreTDScreen} />
            <TDStack.Screen name='Reka' component={Reka} />
            <TDStack.Screen name='Fadderka' component={Fadderka} />
            <TDStack.Screen name='Mediaka' component={Mediaka} />
            <TDStack.Screen name='Rekait' component={Rekait} />
            <TDStack.Screen name='Fadderkait' component={Fadderkait} />
            <TDStack.Screen name='Mediakait' component={Mediakait} />
            <TDStack.Screen name='Propparna' component={Propparna} />
            <TDStack.Screen name='Gruppkoordinatorerna' component={Gruppkoordinatorerna} />
            <TDStack.Screen name='Faddrar' component={Faddrar} />
          </TDStack.Navigator>

  );
};

export default TDScreen
