var React = require('react');

var AddTodoForm = React.createClass({
  propTypes:{
    addNewTodo: React.PropTypes.func
  },
  addNewTodo: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if(todoText.length>0){
      this.refs.todoText.value='';
      this.props.onAddTodo(todoText);
    }else{
      this.refs.todoText.focus();
    }

  },
  render: function(){

    return (
      <div>
        <form ref="todoForm" onSubmit={this.addNewTodo}>
          <input type="text" ref="todoText" placeholder="What do you like to do?"/>
          <button button className="button expanded primary">Add Todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodoForm;
