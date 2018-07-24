import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native'

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
            <FlatList
            data={this.list}
            renderItem ={({item}) => <Text>{item.title}</Text>}
            />
        )
    }
}
export default SuggestionsList