import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionsList extends Component{

    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator  />
    renderItem = ({item}) => {
        return(
            <Suggestion {...item}/>
        )
    }

    list = [];

    constructor(props){
        super(props);
        this.list = [
            {
                title: 'Avengers',
                key: 1
            },
            {
                title: 'Pokemon',
                key: 2
            }
        ];
    }

    render(){
        return(
            <Layout
            title="Recomendado para ti">
                <FlatList
                data={this.list}
                ListEmptyComponent={ this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem ={ this.renderItem}
                />
            </Layout>
        )
    }
}
export default SuggestionsList