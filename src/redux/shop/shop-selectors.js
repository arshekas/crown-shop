import { memoize } from "lodash";
import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectShopCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
export const selectShopCollection = memoize(collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam])
)