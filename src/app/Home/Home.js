import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import { push } from 'react-router-redux'

import { createUserProfile } from '../Actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      signInOptions: [
        this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.props.firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: currentUser => {
          console.log("signInSuccessWithAuthResult", currentUser)
          this.props.createUserProfile(currentUser);
          // this.setState({ signedIn: true });
          // return true;
        }
      }
    };
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = this.props.firebase.auth().onAuthStateChanged(
      (user) => {
        if (!!user) {
          const rt = this.props.profile.isAdmin ? 'dashboard' : 'participantform'
          this.props.goTo(rt)
        }
        // this.setState({ signedIn: !!user })
      }
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    console.log(this.props)
    if (!this.state.signedIn) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h5>Please sign-in:</h5>
          <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={this.props.firebase.auth()} />
        </div>
      );
    }
    return (
      <div>
        <p>Welcome! You are now signed-in!</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUserProfile,
    goTo: route => {
      dispatch(push(`/${route}`))
    }
  }
}

export default compose(
  firebaseConnect(),
  connect(
    // mapStateToProps,
    ({ firebase: { auth, profile } }) => ({ auth, profile }),
    mapDispatchToProps
  )
)(Home);