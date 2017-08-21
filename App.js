import React, {
  Component
} from 'react'

import {
  StackNavigator
} from 'react-navigation'

import CharacterList from './src/components/CharacterList'
import AttackList    from './src/components/AttackList'
import FrameData     from './src/components/FrameData'

const routes = {
  CharacterList: {
    screen: CharacterList
  },

  AttackList: {
    screen: AttackList
  },

  FrameData: {
    screen: FrameData
  }
}

const MainScreen = ({ navigation }) => (
  <CharacterList
    navigation={navigation}
  />
)

const AppNavigator = StackNavigator({
  ...routes,
  Home: {
    screen: MainScreen,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
})

export default () => <AppNavigator />
