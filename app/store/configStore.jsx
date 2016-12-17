var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configStore = ()=>{

  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted:showCompletedReducer,
    todos:todosReducer
  });

  var store = redux.createStore(reducer,redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );

  return store;

};
