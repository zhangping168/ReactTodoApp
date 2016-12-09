var React = require('react');
var uuid = require('uuid');

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
      completed:false
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
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos: updateTodos
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos ={todos} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo={this.handleTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
