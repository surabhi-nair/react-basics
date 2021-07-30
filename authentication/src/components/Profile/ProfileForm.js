import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext( AuthContext );
  const history = useHistory();

  const submitHandler = ( event ) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //add validation

    fetch( 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA-f6bWyWa9KNT1bsVjV8adfnuVI2S3UZg', {
      method: 'POST',
      body: JSON.stringify( {
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      } ),
      headers: {
        'Content-Type': 'application/json',
      }
    } ).then( res => {
      history.replace( '/' );
    } ).catch( err => {
      alert( err.message );
    } );
  };

  return (
    <form className={ classes.form } onSubmit={ submitHandler }>
      <div className={ classes.control }>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={ newPasswordInputRef } />
      </div>
      <div className={ classes.action }>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
