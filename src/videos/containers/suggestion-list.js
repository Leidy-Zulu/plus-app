import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native'
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

class SuggestionsList extends Component{

    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator  />

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
                renderItem ={ ({item}) => <Text>{item.title}</Text>}
                />
            </Layout>
        )
    }
}
export default SuggestionsList