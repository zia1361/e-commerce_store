import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectItemsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';


import './collections-overview.style.scss';

const CollectionOverview = ({collections}) => {
    return (
        <div className='collections-preview'>
            {collections.map(({id, ...otherCollections}) => (
                <CollectionPreview key={id} {...otherCollections} />
            ))
            }
        </div>
    );

}
const mapStateToProps = createStructuredSelector({
    collections: selectItemsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);