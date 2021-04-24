import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync} from '../../redux/shop/shop-actions';
import CollectionOverviewContainer from '../../components/collections-overview/Collection-overview-container'
import CollectionPageContainer from '../collection/Collection-container';

export class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(null, mapDispatchToProps)(ShopPage)

