import shopActionTypes from "./shop-constants";

export const updateCollections = (collectionsMap) => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})