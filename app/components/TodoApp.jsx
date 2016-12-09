var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos:[
        {
            id:1,
            text:'Finish the pizza'
        },
        {
            id:2,
            text:'Watch the movie'
        },
        {
            id:3,
            text:'Play the game'
        }

      ],
      showCompleted:false,
      searchText:''
    }
  },


  handleTodo: function(text){

    console.log('New Text: ' + text);

  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos ={todos}/>
        <AddTodoForm onAddTodo={this.handleTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
