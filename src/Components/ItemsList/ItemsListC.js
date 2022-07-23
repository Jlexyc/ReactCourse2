import React, { Component } from 'react'
import { connect } from 'react-redux'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { deleteItem, fetchItems } from "../../Store/Items/thunks";
import { selectIsItemsLoading, selectItemsError, selectRemovingItems, selectTotalWeight, selectItems } from "../../Store/Items/selectors";
import { ItemComponent } from "../ItemComponent/ItemComponent";

const styles = {
  progress: {
    display: 'flex',
    margin: 20,
  }
};

class ItemsListC extends Component {

  constructor(props) {
    super(props);
    this.onDeleteElement = this.onDeleteElement.bind(this);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  onDeleteElement(id) {
    this.props.deleteItem(id);
  }

  onTitleClicked() {

  }

  render() {
    const { isItemsLoading, itemsError, removingItems, total, items } = this.props;
    if (itemsError) {
      return (
        <div>{itemsError}</div>
      )
    }
  
    if (isItemsLoading) {
      return (
        <Box sx={styles.progress}>
          <CircularProgress />
        </Box>
      )
    }

    return (
      <table>
        <tbody>
          {items.map((item) => <ItemComponent 
            onDeleteClicked={this.onDeleteElement} 
            onTitleClicked={this.onTitleClicked}
            key={item.id} 
            item={item}
            isRemoving={removingItems[item.id]}
          />)}
          <tr>
            <td />
            <td />
            <td>Total:</td>
            <td>{total}</td>
          </ tr>
      </tbody>
    </table>
    )
  }
}

const mapStateToProps = (state) => ({
  isItemsLoading: selectIsItemsLoading(state),
  itemsError: selectItemsError(state),
  removingItems: selectRemovingItems(state),
  total: selectTotalWeight(state),
  items: selectItems(state),
})

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
    fetchItems: () => dispatch(fetchItems()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListC)