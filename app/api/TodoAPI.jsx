var $ = require('jquery');

module.exports = {
  setTodos:function(todos){
      if($.isArray(todos)){
        localStorage.setItem('todos',JSON.stringify(todos));
        return todos;
      }
  },
  getTodos:function(){
    var todos = [];
    var stringTodos = localStorage.getItem('todos');

    try{
      todos = JSON.parse(stringTodos);
    }
    catch(e){

    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText){
    var filterTodos = todos;

    //Filter by showCompleted
    filterTodos = filterTodos.filter((todo)=>{
      return !todo.showCompleted || showCompleted; //only show todo not completed

    });

    //Filter by searchText

    filterTodos = filterTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();

      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });


    //sort todos with non-completed first
    filterTodos = filterTodos.sort((a, b)=>{
      if(!a.showCompleted && b.showCompleted){
        return -1;
      }else if(a.showCompleted && !b.showCompleted){
        return 1;
      }else{
        return 0;
      }
    });
    return filterTodos;
  }
}
