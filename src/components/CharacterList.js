import React, {
  Component
} from 'react'

import {
  Body,
  Container,
  Content,
  Header,
  StyleProvider,
  Text,
  Title
} from 'native-base'

import {
  fromJS,
  List,
  OrderedMap
} from 'immutable'

import config    from '../../config/defaults'
import getTheme  from '../../native-base-theme/components'
import platform  from '../../native-base-theme/variables/platform'
import Character from './Character'

import { Font } from 'expo'

import CharacterSourceList from '../../data/characters'

const apiUrl = config.sfv.url

export default class CharacterList extends Component {
  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
    this.characters = CharacterSourceList['characters']
    this.state = {
      data: OrderedMap()
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'Ionicons': require('../../assets/fonts/Ionicons.ttf')
    })
    this.setState({
      data: OrderedMap(this.characters.sort().map(
        (name, index) => ([name, `${config.assets.url}/${name.toLowerCase()}.png`])
      ))
    })
  }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Body>
              <Title>
                <Text>SFV Frame Data</Text>
              </Title>
            </Body>
          </Header>
          <Content>
            {
              this.state.data.map((imageUrl, name) => {
                return (
                  <Character
                    key={name}
                    name={name}
                    imageUrl={imageUrl}
                    navigation={this.navigation} />
                )
              }).toList()
            }
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}
