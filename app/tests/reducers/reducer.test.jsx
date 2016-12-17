var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers',()=>{

  describe('searchTextReducer',()=>{

    it('Should generate searchText Reducer ',()=>{
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText:'Dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });

  })

  describe('showCompletedReducer',()=>{
    it('Should generate showCompleted Reducer',()=>{
      var action={
        type:'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    })
  })

  describe('todosReducer',()=>{
      it('Should generate todos Reducer',()=>{
        var action ={
          type:'ADD_TODO',
          text:'go to the park'
        };

        var res = reducers.todosReducer(df([]), df(action));
        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.text);
      });

      it('Should generate toggle todo Reducer',()=>{
        var action={
          type:'TOGGLE_TODO',
          id:123
        };

        var todos=[{
          id:123,
          text:'go to the park',
          showCompleted:true,
          createdAt:123,
          completedAt:125
        }];

        var res = reducers.todosReducer(df(todos),df(action));
        expect(res[0].showCompleted).toEqual(false);
        expect(res[0].completedAt).toEqual(undefined);
      })
  })

});
