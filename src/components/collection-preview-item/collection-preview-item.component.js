import React from 'react';

import './collection-preview-item.style.scss';
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import {connect} from 'react-redux';

const PreviewItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item;
    return(
        <div className='collection-item'>
            <div 
            className='image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomButton>
        </div>

    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,
    mapDispatchToProps
    )(PreviewItem);