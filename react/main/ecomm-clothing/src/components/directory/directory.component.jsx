import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = DIRECTORY_DATA;
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...restSectionProps }) => (
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
    }
}

export default Directory;
