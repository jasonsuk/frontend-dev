import ShopActionTypes from './shop.types';

export const updateCollections = (collectionObj) => ({
    type: ShopActionTypes.UPDATE_COLLECTION,
    payload: collectionObj,
});
