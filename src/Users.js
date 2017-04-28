import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import User from "./User";

const { array, func } = PropTypes;

class Users extends Component {
  static propTypes = {
    users: array.isRequired,
    remove: func,
    load: func
  };

  render() {
    return (
      <ListGroup>
        {this.props.users.map(user => (
          <User
            key={user.id}
            user={user}
            remove={this.props.remove}
            load={this.props.load}
          />
        ))}
      </ListGroup>
    );
  }
}

export default Users;
