import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectionCollectionsForPreview } from '../../redux/shop/shop.selector';
// import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectionCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
