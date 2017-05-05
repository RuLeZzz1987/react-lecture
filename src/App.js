import React, { PureComponent } from "react";
import {
  FormControl,
  FormGroup,
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import PropTypes from "prop-types";
import Users from "./Users";
import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./UserDetailsContainer";

const { func, string, array, number } = PropTypes;

class App extends PureComponent {

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const {
      query,
      changeSearchField,
      users,
      total,
      searchUsers,
      removeUser,
      loadUser
    } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Users List</h2>
        </div>
        {!!total && <h3>Total Found: {total}</h3>}
        <Grid>
          <Row style={{ marginTop: "15px" }}>
            <Col xsOffset={4} xs={4}>
              <FormGroup>
                <FormControl onChange={changeSearchField} value={query} />
              </FormGroup>
              <FormGroup>
                <Button bsStyle="primary" bsSize="large" onClick={searchUsers}>
                  Search
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
        <Users remove={removeUser} users={users} load={loadUser} />
        <UserDetails />
      </div>
    );
  }
}

App.propTypes = {
  query: string.isRequired,
  changeSearchField: func.isRequired,
  loadUsers: func.isRequired,
  users: array.isRequired,
  total: number,
  searchUsers: func.isRequired,
  removeUser: func.isRequired,
  loadUser: func.isRequired
};

export default App;
