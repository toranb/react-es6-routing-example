var Link = ReactRouter.Link;

export default React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="session" sessionId="123" query={{showSpeaker: true}}>introduction to react</Link></li>
          <li><Link to="session" sessionId="456">protip: use ember.js</Link></li>
        </ul>
        {this.props.activeRoute}
      </div>
    );
  }
});
