import './Collection-overview.scss'
import React from 'react'
import CollectionPreview from '../collectionPreview/CollectionPreview'
import { connect } from 'react-redux'
import { selectShopCollectionForPreview } from '../../redux/shop/shop-selectors'
import { createStructuredSelector } from 'reselect'

function CollectionsOverview({collections}) {
    console.log(collections);
    return (
        <div className="collections-overview">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)
