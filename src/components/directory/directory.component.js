import React from 'react';

import './directory.style.scss';

import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

const Directory = ({sections}) => {
        return(
            <div className='directory-menu'>
                {sections.map(({Id, ...otherSections}) => (
                    <MenuItem key={Id} {...otherSections}/>
                ))}
            </div>
            
        );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);