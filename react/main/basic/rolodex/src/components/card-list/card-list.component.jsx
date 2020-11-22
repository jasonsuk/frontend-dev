import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => {
    // props return every attributes specified in CardList component
    // console.log(props);
    // console.log(props.children);
    return (
        <div className="card-list">
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
};
