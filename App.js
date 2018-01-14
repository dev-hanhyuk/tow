import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from './store';


import Winebars from './components/Winebars';
import WinebarDetail from './components/WinebarDetail';

const WinebarsNavigator = StackNavigator({
  Winebars: { screen: Winebars },
  WinebarDetail: { screen: WinebarDetail },
})


const AppTabNavigator = TabNavigator({
  WinebarsNavigator: {
    screen: WinebarsNavigator,
    navigationOptions: {
      tabBarLabel: '와인바',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-navigate' : 'ios-navigate-outline'}
          size={26}
          style={{ color: tintColor}} />
      )
    }
  },
})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppTabNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
