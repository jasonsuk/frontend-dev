import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    firestore,
    bringCollectionDataToApp,
} from '../../firebase/firebase.utils';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import { updateCollections } from '../../redux/shop/shop.action';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './shop.styles.scss';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// Construct a class to fetch shop data from Firebase
class ShopPage extends React.Component {
    // Fetch data using subscribe / unsubscribe method

    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        // @shop.action
        const { updateCollections } = this.props;
        // Load collection reference for 'collections'
        const collectionRef = firestore.collection('collections');
        // Tidy up the code by creating and loading a function @ firebase.util
        collectionRef.onSnapshot((snapshot) => {
            const collectionObj = bringCollectionDataToApp(snapshot); // returns data object
            updateCollections(collectionObj);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                    // component={CollectionOverview}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                    // component={CollectionPage}
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

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionObj) =>
        dispatch(updateCollections(collectionObj)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
