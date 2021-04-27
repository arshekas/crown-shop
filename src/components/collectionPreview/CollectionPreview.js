import React from 'react'
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss'

function CollectionPreview({ title, items, match, history, routeName} ) {
    return (
        <div className="collection-preview">
            <h2 onClick={() => history.push(`${match.path}/${routeName}`)} className="title">{title.toUpperCase()}</h2>
            <div className="preview">
               {items.filter((item, idx) => idx < 4 ).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview)
