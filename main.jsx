var Counter = React.createClass({
  handleClick : function () {
    this.props.handleClick(this.props.increment);
  },
  render: function () {
    return (
      <button onClick={this.handleClick}>
        {this.props.increment}
      </button>
    );
  },
});
var Result = React.createClass({
  render: function () {
    return <p>{this.props.counterValue}</p>;
  },
});
var Div = React.createClass({
  getInitialState: function () {
    return { counter: 0 };
  },
  handleClick: function (value) {
    this.setState({ counter: this.state.counter + value });
  },
  render: function () {
    let num = "#"+(Math.random() * 100000).toString(16);
    return (
      <div style = {{backgroundColor: num}} >
        <Result counterValue={this.state.counter} />
        <Counter handleClick={this.handleClick} increment={1} />
        <Counter handleClick={this.handleClick} increment={2} />
        <Counter handleClick={this.handleClick} increment={4} />
        <Counter handleClick={this.handleClick} increment={8} />
      </div>
    );
  },
});

var Main = React.createClass({
  getInitialState : function () {
    return {myCounters : [<Div/>]}
  },
  handleClick : function () {
  this.setState({myCounters : this.state.myCounters.concat([<Div/>])})
  },
  render : function () {
    return (
    <div>{this.state.myCounters}
      <button onClick = {this.handleClick}>Add Counter</button></div>
    )
  }
})
ReactDOM.render(<Main />, document.getElementById("root"));
