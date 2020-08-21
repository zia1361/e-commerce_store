import {createSelector} from 'reselect';

export const selectShop = state => state.shop;


export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectShopItem = collectionUrlParam => 
    createSelector(
    [selectShopItems],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectItemsForPreview = createSelector(
    [selectShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);