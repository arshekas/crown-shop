import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";
import withSpinner from "../withSpinner/withSpinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

// const CollectionOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionOverview))

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionOverview)

export default CollectionOverviewContainer