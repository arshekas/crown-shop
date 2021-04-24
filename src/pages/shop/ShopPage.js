import CollectionOverview from '../../components/collections-overview/CollectionOverview'
import { Route } from 'react-router-dom'
import Collection from '../collection/Collection'
import React, { Component } from 'react'
import { convertCollecionsSnapshotToMap, firestore } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
import withSpinner from '../../components/withSpinner/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

export class ShopPage extends Component {
    state = {
        loading: true
    };
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollecionsSnapshotToMap(snapshot)
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false})
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollecionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
      dispatch(updateCollections(collectionsMap))
  });
export default connect(null, mapDispatchToProps)(ShopPage)

