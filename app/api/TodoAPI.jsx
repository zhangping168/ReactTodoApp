var $ = require('jquery');

module.exports = {
  setTodos:function(todos){
      if($.isArray(todos)){
        localstorage.setItem('todos',JSON.stringify(todos));
        return todos;
      }
  },
  getTodos:function(){
    var todos = [];
    var stringTodos = localstorage.getItem('todos');

    try{
      todos = JSON.parse(stringTodos);
    }
    catch(e){

    }

    if($.isArray(todos)){
      return todos;
    }else{
      return [];
    }
  }
}
