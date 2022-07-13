import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateUserModelAction } from '../../Store/App/actions';
import { selectUserModel } from '../../Store/App/selectors';

export const RegistrationScreen2 = () => {

  const userModel = useSelector(selectUserModel);
  const [email, setEmail] = useState(userModel.email || '')
  const [password, setPassword] = useState(userModel.password || '')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEmailChange = useCallback((event) => {
    setEmail(event.target.value)
  }, [])
 
  const onPasswordChange = useCallback((event) => {
    setPassword(event.target.value)
  }, [])

  const onContinuePressed = useCallback(() => {
    dispatch(updateUserModelAction({
      email,
      password
    }))
    navigate('/register/userdata')
  }, [dispatch, navigate, email, password])

  return (
    <div>
      <p>Email:</p>
      <input value={email} onChange={onEmailChange} />
      <p>Password:</p>
      <input value={password} onChange={onPasswordChange} />
      <br />
      <br />
      <button onClick={onContinuePressed} >Continue</button>
    </div>
  )
}