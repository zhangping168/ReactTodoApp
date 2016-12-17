var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state='', action)=>{
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;

  }
};

export var showCompletedReducer = (state=false,action)=>{

  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
    return state;
  }
};


export var todosReducer = (state=[], action)=>{
  switch (action.type) {
    case 'ADD_TODO':
        return [
          ...state,
          {
            id: uuid(),
            text:action.text,
            showCompleted:false,
            createdAt:moment().unix(),
            completedAt:undefined
          }
        ];
    case 'TOGGLE_TODO':
      var id = action.id;
      return state.map((todo)=>{
        if(todo.id === id){
          todo.showCompleted = !todo.showCompleted;
          todo.completedAt = todo.showCompleted ?moment().unix() : undefined;
        }
      
      });
    default:
      return state;

  }
}
