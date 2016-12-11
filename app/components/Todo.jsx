var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  handleOnClick: function(){
    var {id} = this.props;
    this.props.onToggle(id);
  },

  render: function(){
    var {id, text, showCompleted, createdAt,completedAt} = this.props;
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
      <div onClick={this.handleOnClick}>
        <input type="checkbox" checked={showCompleted} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }

});

module.exports = Todo;
