var Counter = React.createClass({
  handleClick: function () {
    this.props.handleClick(parseInt(this.props.value));
  },
  render: function () {
    return <button onClick={this.handleClick}>{this.props.value}</button>;
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
  reset : function () {
    this.handleClick(0);
  },
  render: function () {
    // let num = "#" + (Math.random() * 100000).toString(16);
    return (
      <div /*style={{ backgroundColor : num }}*/>
        <Result counterValue={this.state.counter} />
        <Counter handleClick={this.handleClick} value={"-8"} />
        <Counter handleClick={this.handleClick} value={"-4"} />
        <Counter handleClick={this.handleClick} value={"-2"} />
        <Counter handleClick={this.handleClick} value={"-1"} />
        <button onClick = {this.reset}>Reset</button>
        <Counter handleClick={this.handleClick} value={"+1"} />
        <Counter handleClick={this.handleClick} value={"+2"} />
        <Counter handleClick={this.handleClick} value={"+4"} />
        <Counter handleClick={this.handleClick} value={"+8"} />
      </div>
    );
  },
});

var Main = React.createClass({
  getInitialState: function () {
    return { myCounters: [] };
  },
  handleClick: function () {
    this.setState({ myCounters: this.state.myCounters.concat([<Div />]) });
  },
  render: function () {
    return (
      <div>
        <button onClick={this.handleClick}>Add Counter</button>
        <br />
        {this.state.myCounters}
      </div>
    );
  },
});
ReactDOM.render(<Main />, document.getElementById("root"));
