var Counter = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.handleClick(this.props.increment)}>
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
var Main = React.createClass({
  getInitialState: function () {
    return { counter: 0 };
  },
  handleClick: function (value) {
    this.setState({ counter: this.state.counter + value });
  },
  render: function () {
    return (
      <div>
        <Result counterValue={this.state.counter} />
        <Counter handleClick={this.handleClick} increment={1} />
        <Counter handleClick={this.handleClick} increment={2} />
        <Counter handleClick={this.handleClick} increment={4} />
        <Counter handleClick={this.handleClick} increment={8} />
      </div>
    );
  },
});
ReactDOM.render(<Main />, document.getElementById("root"));
