import React from "react";
import { connect } from "react-redux";
import { add, del, find } from "./module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delDoChange = this.delDoChange.bind(this);
    this.delDoAction = this.delDoAction.bind(this);
    this.findDoChange = this.findDoChange.bind(this);
    this.faindDoAction = this.faindDoAction.bind(this);
    this.state = {
      message: "",
      number: 0,
      find: "",
    };
    const { add } = this.props;
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { add } = this.props;
    let message = this.state.message;
    add(message);
    this.setState({
      message: "",
    });
    console.log(this.props);
  }

  delDoChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  delDoAction(e) {
    e.preventDefault();
    let { del } = this.props;
    let num = this.state.number;
    console.log("number", num);
    del(num);
    this.setState({
      number: 0,
    });
  }

  findDoChange(e) {
    this.setState({
      find: e.target.value,
    });
  }

  faindDoAction(e) {
    e.preventDefault();
    let { find } = this.props;
    let text = this.state.find;
    find(text);
  }

  render() {
    let n = 0;
    let item = this.props.data.map((value) => (
      <option key={n} value={n++}>
        {value.message.substring(0, 10)}
      </option>
    ));
    return (
      <center>
        <h1>todo</h1>
        <div>
          <h2>検索結果</h2>
          {this.props.fdata.map((message) => (
            <div>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            size="40"
            onChange={this.handleChange}
            value={this.state.message}
          ></input>
          <input type="submit" value="add" />
        </form>
        <form onSubmit={this.delDoAction}>
          <select onChange={this.delDoChange} defaultValue="-1">
            {item}
          </select>
          <input type="submit" value="Del"></input>
        </form>
        <form onSubmit={this.faindDoAction}>
          <input type="text" size="10" onChange={this.findDoChange}></input>
          <input type="submit" value="find"></input>
        </form>

        <div>
          {this.props.data.map((message) => (
            <div>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        {/* {message} => <div><Item message={message}/></div> */}
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    fdata: state.fdata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => dispatch(add(text)),
    del: (num) => dispatch(del(num)),
    find: (text) => dispatch(find(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

export { App };
