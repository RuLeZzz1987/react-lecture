import React, { PureComponent } from "react";
import { Modal, Row, Col, Thumbnail } from "react-bootstrap";
import PropTypes from "prop-types";

const {func, shape, string, number} = PropTypes;

class UserDetails extends PureComponent {

  static propTypes = {
    user: shape({
      id: number,
      name: string,
      avatar_url: string
    }),
    hide: func
  };

  render() {
    const { user, hide } = this.props;

    return (
      <Modal show={!!user} backdrop onHide={hide}>
        {user &&
          <Modal.Header closeButton>
            <Col xs={4} xsOffset={4}>
              {user.name}
            </Col>
          </Modal.Header>}
        {user &&
          <Modal.Body>
            <Thumbnail src={user.avatar_url} />
          </Modal.Body>}
      </Modal>
    );
  }
}

export default UserDetails