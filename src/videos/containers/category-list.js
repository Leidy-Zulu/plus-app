import React, {Component} from 'react';
import{
    View,
    Text,
    FlatList
} from 'react-native'
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class CategoryList extends Component{
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias" />
    itemSeparator = () => <Separator horizontal={true} />
    renderItem = ({item}) => {
        return(
            <Suggestion {...item}/>
        )
    }
    render(){
        return(
            <Layout
              title="Categorías"
            >
                <FlatList
            horizontal
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            ListEmptyComponent={ this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem ={ this.renderItem}
            />
            </Layout>
            
        )
    }
}

export default CategoryList