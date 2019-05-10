const React = require('react');

class FeelTheForce extends React.Component {
  constructor() {
    super();
    this.myInput = 'Charlotte';
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    e.target.value === undefined
      ? this.myInput = ''
      : this.myInput = e.target.value;
    setTimeout(() => this.forceUpdate(), 500);
  }

  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="form-control bg-light text-primary"
          value={this.myInput}
          onChange={this.changeHandler}
        />
        <br />
        <button className="btn btn-outline-primary" onClick={this.changeHandler}>Reset input</button>
        <br />
        <br />
        <h1 className="display-3 text-light bg-primary">{this.myInput}</h1>
      </div>
    );
  }
}

export default FeelTheForce;
