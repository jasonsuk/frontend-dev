import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';
// import DIRECTORY_DATA from './directory.data';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => {
    // console.log(sections);
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...restSectionProps }) => (
                <MenuItem
                    key={id}
                    {...restSectionProps}
                    // title={title}
                    // imageUrl={imageUrl}
                    // size={size}
                    // linkUrl={linkUrl}
                />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
