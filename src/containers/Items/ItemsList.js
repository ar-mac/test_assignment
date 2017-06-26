import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class ItemsList extends Component {
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

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    })
  )
};

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps)(ItemsList);
