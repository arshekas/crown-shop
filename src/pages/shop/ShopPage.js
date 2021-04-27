import { Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/collections-overview/Collection-overview-container'
import CollectionPageContainer from '../collection/Collection-container';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

const ShopPage = ({match, fetchCollectionsStart}) => {

    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart])
    // componentDidMount() {
    //     const { fetchCollectionsStart } = this.props;
    //     fetchCollectionsStart();
    // }
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage)

