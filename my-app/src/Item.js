import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <p>{this.props.message}</p>
        );
    }
}

export default Item;