import React from "react";
import { ListGroupItem, Row, Col, Thumbnail, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const { shape, func, string, number } = PropTypes;

const User = ({ user, remove, load }) => {
  return (
    <ListGroupItem>
      <Row>
        <Col xs={4}><h3>{user.id}</h3></Col>
        <Col xs={4}>
          <Col xs={4}><Thumbnail src={user.avatar_url}/></Col>
          <div><a onClick={e => {
            e.preventDefault();
            load(user.login)
          }}>{user.login}</a></div>
        </Col>
        <Col xs={4}>
          <Button
            bsStyle="danger"
            bsSize="large"
            onClick={() => remove(user.id)}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

User.propTypes = {
  user: shape({
    id: number,
    avatar_url: string,
    login: string
  }).isRequired,
  remove: func.isRequired,
  load: func.isRequired
};

export default User;
