import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {auth, createUser} from './firebase/firebase.utils';
import {setCurrentuser} from './redux/user/user.action';

import {connect} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkoutpage/checkoutpage.component';

import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {
 unsubscribeFromAuth = null;

 componentDidMount(){
   const {setCurrentuser, currentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    console.log('userAuth: \n',userAuth);
    console.log('currentUser: \n', currentUser);
    if(userAuth){
        try{
          // eslint-disable-next-line
          if(!currentUser || currentUser.id != userAuth.uid){
             
            console.log('creating user');
            const userRef = await createUser(userAuth);
            console.log("useRef", userRef);
            userRef.onSnapshot(snapshot => {
            setCurrentuser(
               {id: snapshot.id,
                email: userAuth.email}
            );
            });
          }
        
            
     }catch(error){
       console.log('error while starting app: \n ', error.message);
     }
    

    }else{
      setCurrentuser(userAuth);
    }
    // this.setState({currentUser: user});
  }
  )}
  
 

 componentWillUnmount(){
   console.log('unmounted');
   this.unsubscribeFromAuth();
 }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentuser: user => dispatch(setCurrentuser(user))
});

export default connect(mapStateToProps,
  mapDispatchToProps
  )(App);
