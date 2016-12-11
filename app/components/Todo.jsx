var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  handleOnClick: function(){
    var {id} = this.props;
    this.props.onToggle(id);
  },

  render: function(){
    var {id, text, showCompleted, createdAt,completedAt} = this.props;
    var todoClassName = showCompleted ? 'todo todo-completed':'todo';

    var renderDate = ()=>{
      var message ="Created At ";
      var timestamp = createdAt;

      if(showCompleted){
        message ="Completed At ";
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ H:mm a');
    };
    return (
      <div className={todoClassName} onClick={this.handleOnClick}>
        <div>
          <input type="checkbox" checked={showCompleted} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }

});

module.exports = Todo;
