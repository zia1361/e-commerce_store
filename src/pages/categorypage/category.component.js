import React from 'react';
import {connect} from 'react-redux';

import './category.style.scss';

import {selectShopItem} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-preview-item/collection-preview-item.component';

const CategoryPage = ({collection}) => {
    const {title, items} = collection;
    return(
        <div className='category'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopItem(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);