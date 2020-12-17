import React from 'react';
import { Route } from 'react-router-dom';

import {
    firestore,
    convertCollectionsSnapshotMap,
} from '../../firebase/firebase.utils';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import './shop.styles.scss';

// Construct a class to fetch shop data from Firebase
class ShopPage extends React.Component {
    // Fetch data using subscribe / unsubscribe method
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        // Load collection reference for 'collections'
        const collectionRef = firestore.collection('collections');
        // Tidy up the code by creating and loading a function @ firebase.util
        collectionRef.onSnapshot((snapshot) => {
            convertCollectionsSnapshotMap(snapshot);
        });
    }

    render() {
        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverview}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                />
            </div>
        );
    }
}

// const ShopPage = ({ match }) => {
//     return (
//         <div className="shop-page">
//             <Route
//                 exact
//                 path={`${match.path}`}
//                 component={CollectionOverview}
//             />
//             <Route
//                 path={`${match.path}/:collectionId`}
//                 component={CollectionPage}
//             />
//         </div>
//     );
// };

export default ShopPage;
