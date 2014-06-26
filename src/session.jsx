var sessions = [
    {id: "123", name: "introduction to react", speaker: "toran billups"},
    {id: "456", name: "protip: use ember.js", speaker: "rob becker"}
];

export default React.createClass({
  render: function() {
    var speakerName = "wat";
    var sessionId = this.props.params.sessionId;
    var session = sessions.filter(function(session) {
        return session.id === sessionId;
    })[0];
    if (this.props.query.showSpeaker) {
        speakerName = session.speaker;
    }else{
        speakerName = "(hidden)";
    }
    return (
      <div className="Session">
        <h2>Session: {session.name}</h2>
        <h3>Speaker: {speakerName}</h3>
      </div>
    );
  }
});
