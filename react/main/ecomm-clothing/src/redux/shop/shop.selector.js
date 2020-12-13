import { createSelector } from 'reselect';

// match.params.collectionId !== id in integer
// so map possible ids with relevant value
// [NOTE] Don't need this mapping after data normalization
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

// Side effect of data normalization is
// @collection-overview.component : .map() is an array method and cannot be used onto an object
// So it needs some transformation into array
export const selectionCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map((key) => collections[key])
);

// Data normalization : @shop.data.js store 'large data' in object instead in array
export const selectCollection = (collectionUrlParams) =>
    createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParams]
    );

// Before data noralization
// As stored data gets larger, .find() method takes long time to find individual item
// export const selectCollection = (collectionUrlParams) =>
//     createSelector([selectCollections], (collections) =>
//         collections.find(
//             (collection) =>
//                 collection.id === COLLECTION_ID_MAP[collectionUrlParams]
//         )
//     );
