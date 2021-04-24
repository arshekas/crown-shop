import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss'

function CollectionPreview({ title, items, match, history, routeName} ) {
    return (
        <div className="collection-preview">
            <Link onClick={() => history.push(`${match.path}/${routeName}`)}><h1 className="title">{title.toUpperCase()}</h1></Link>
            <div className="preview">
               {items.filter((item, idx) => idx < 4 ).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview)
