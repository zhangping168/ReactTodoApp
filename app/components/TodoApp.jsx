var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos:TodoAPI.getTodos(),
      showCompleted:false,
      searchText:''
    }
  },


  handleTodo: function(text){

    var newTodo = {
      id: uuid(),
      text:text,
      showCompleted:false,
      createdAt:moment().unix(),
      completedAt:undefined
    };

    var prevTodos = this.state.todos.slice();
    prevTodos.push(newTodo);
    this.setState({todos:prevTodos});

  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },
  handleToggle: function (id) {
    var updateTodos = this.state.todos.map((todo)=>{
      if(todo.id  === id){
        todo.showCompleted = !todo.showCompleted;
        todo.completedAt = todo.showCompleted ? moment().unix() : undefined
      }
      return todo;
    });

    this.setState({
      todos: updateTodos
    });
  },
  render: function(){

    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo={this.handleTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
