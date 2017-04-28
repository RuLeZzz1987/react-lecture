import React, { Component } from "react";
import {
  FormControl,
  FormGroup,
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import Users from "./Users";
import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./UserDetails";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      query: ""
    };

    this.changeQuery = e => this.setState({ query: e.target.value });

    this.search = () =>
      fetch(`http://api.github.com/search/users?q=${this.state.query}`)
        .then(r => r.json())
        .then(r => this.setState({ total: r.total_count, users: r.items }));

    this.remove = id =>
      this.setState({ users: this.state.users.filter(user => user.id !== id) });

    this.loadUser = login => {
      fetch(`http://api.github.com/users/${login}`)
        .then(r => r.json())
        .then(r => this.setState({ user: r }));
    };

    this.hideDetails = () => this.setState({user: undefined})
  }

  componentDidMount() {
    fetch("http://api.github.com/users")
      .then(r => r.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Users List</h2>
        </div>
        {this.state.total && <h3>Total Found: {this.state.total}</h3>}
        <Grid>
          <Row style={{ marginTop: "15px" }}>
            <Col xsOffset={4} xs={4}>
              <FormGroup>
                <FormControl
                  onChange={this.changeQuery}
                  value={this.state.query}
                />
              </FormGroup>
              <FormGroup>
                <Button bsStyle="primary" bsSize="large" onClick={this.search}>
                  Search
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
        <Users remove={this.remove} users={this.state.users} load={this.loadUser}/>
        <UserDetails user={this.state.user} hide={this.hideDetails}/>
      </div>
    );
  }
}

export default App;
