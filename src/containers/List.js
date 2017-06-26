import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const {items = []} = this.props;
    if (!items.length) return <div>No items</div>;

    return (
      <div className="items">
        {items.map(item => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    })
  )
};

export default List;
