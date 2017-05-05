import UserDetails from "./UserDetails";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearUser } from "./actions/userAction";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ hide: clearUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
