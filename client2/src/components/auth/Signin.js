import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signin, setEmailState, getProfile} from '../../actions/index';
import {useHistory} from 'react-router-dom';
import {Paper} from '../Styles';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await dispatch(setEmailState(email));
    dispatch(getProfile({email: email}))

    dispatch(signin({
      email: email,
      password: password
    }, ()=>{
      console.log('pushing to another page');
      history.push('/account');
    }))

  }

  return( 

    <Paper>
  <div className="mt-5">
    <div className="grid align__item">
      <div className="register">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}  className="form">
            <div className="form__field">
              <input type="email" placeholder="info@mailaddress.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div className="form__field">
              <input type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••••••" />
            </div>

            <div className="form__field">
              <input type="submit" value="Log In" />
            </div>
        </form>

        <p>Don't have an account? <Link to="/form">Register Here</Link></p>
      </div>
    </div>
  </div>
  </Paper>
  );
  
};

export default Signin;