/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  {
  Text
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api'

type Props = {};
export default class App extends Component<Props> {
  state = {
    SuggestionList:[]
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    console.log(movies);
    this.setState({
      SuggestionList: movies,
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList
          list={this.state.SuggestionList} />
      </Home>
  
    );
  }
}


