import ItemsReducer from '../ItemsReducer';
import AddItem from '../../actions/AddItem';
import ResetItems from '../../actions/ResetItems';

describe('ItemsReducer', () => {
  test('adding first item', () => {
    const action = AddItem({ content: 'test content' });
    const firstItem = ItemsReducer([], action)[0];

    expect(firstItem.content).toEqual('test content');
    expect(firstItem.count).toEqual(0);
  });

  test('adding another item', () => {
    const state = [
      { id: '123123', content: 'first item', count: 0 },
      { id: '234234', content: 'second item', count: 1 },
    ];
    const action = AddItem({ content: 'test content' });
    const firstItem = ItemsReducer(state, action)[0];

    expect(firstItem.content).toEqual('test content');
    expect(firstItem.count).toEqual(2);
    expect(ItemsReducer(state, action)[1]).toEqual({
      id: '123123', content: 'first item', count: 0
    });
    expect(ItemsReducer(state, action)[2]).toEqual({
      id: '234234', content: 'second item', count: 1
    });
  });

  test('reset items', () => {
    const state = [
      { id: '123123', content: 'first item', count: 0 },
      { id: '234234', content: 'second item', count: 1 },
    ];
    const action = ResetItems();
    expect(ItemsReducer(state, action)).toEqual([]);
  });
});
