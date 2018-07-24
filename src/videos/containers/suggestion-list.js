import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout';

class SuggestionsList extends Component{

    list = [];

    constructor(props){
        super(props);
        this.list = [
            {
                title: 'leo',
                key: '1'
            },
            {
                title: 'nidas',
                key: '2'
            }
        ];
    }

    render(){
        return(
            <Layout
            title="Recomendado para ti">
                <FlatList
                data={this.list}
                renderItem ={({item}) => <Text>{item.title}</Text>}
                />
            </Layout>
        )
    }
}
export default SuggestionsList