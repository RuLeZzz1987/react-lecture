import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./App";
import { bindActionCreators } from "redux";
import { changeSearchField } from "./actions/formAction";
import { loadUsers, searchUsers, removeUser } from "./actions/usersAction";
import { loadUser } from "./actions/userAction";
import { store } from "./store";

const mapStateToProps = (state, ownProps) => ({
  query: state.form,
  users: state.users,
  total: state.total
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeSearchField,
  loadUsers,
  searchUsers,
  removeUser,
  loadUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

export class AppContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ""
    }
  }

  componentDidMount() {
    this.subscription = store.subscribe(
      () => {
        const state = store.getState();
        this.setState({
          query: state.form
        })
      }
    )
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    return (
      <App
        query={this.state.query}
      />
    )
  }
}