import React from 'react';
import {Route} from 'react-router-dom';
import {fetchCollectionsAsync} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import CategoryPage from '../categorypage/category.component';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/spinner/spinner.component';
import './shop.style.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component{
    
    componentDidMount(){
        const {fetchCollectionsAsync} = this.props;
        fetchCollectionsAsync();
    }
    render(){
        const {match, isCollectionsLoaded} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => (
                    <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                )} />
                <Route exact path={`${match.path}/:categoryId`} render={props => (
                    <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                )} />
            </div>
        );
    }
   
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);