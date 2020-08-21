import React from 'react';

import PreviewItem from '../collection-preview-item/collection-preview-item.component';

import './collection-preview.style.scss';

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4)
                .map(item => (<PreviewItem key={item.id} item={item}/>))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;