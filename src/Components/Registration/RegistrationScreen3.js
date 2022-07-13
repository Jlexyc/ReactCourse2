import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserModelAction, setIsRegistered } from '../../Store/App/actions';
import { selectUserModel } from '../../Store/App/selectors';

export const RegistrationScreen3 = () => {
  const userModel = useSelector(selectUserModel);

  const [name, setName] = useState(userModel.name)
  const [lastname, setLastname] = useState(userModel.lastname)
  const [height, setHeight] = useState(userModel.height)
  const [weight, setWeight] = useState(userModel.weight)

  const dispatch = useDispatch();
  const onNameChange = useCallback((event) => {
    setName(event.target.value)
  }, [])
 
  const onLastnameChange = useCallback((event) => {
    setLastname(event.target.value)
  }, [])

  const onHeightChange = useCallback((event) => {
    const value = event.target.value.trim();
    console.log('value: ', value.trim())
    const isStringHasOnlyNumbers = /^\d+$/.test(value);
    console.log('isStringHasOnlyNumbers: ',isStringHasOnlyNumbers)
    if (isStringHasOnlyNumbers || !value.length) {
      setHeight(value)
    }
  }, [])

  const onWeightChange = useCallback((event) => {
    setWeight(event.target.value)
  }, [])

  const onContinuePressed = useCallback(() => {
    dispatch(updateUserModelAction({
      name,
      lastname,
      height,
      weight,
    }))
    localStorage.setItem('isRegistered', true);
    localStorage.setItem('user', JSON.stringify({
      ...userModel,
      name,
      lastname,
      height,
      weight,
    }));
    dispatch(setIsRegistered(true));
  }, [
    dispatch,
    name,
    lastname,
    height,
    weight,
  ])

  return (
    <div>
      <p>Name:</p>
      <input value={name} onChange={onNameChange} />
      <p>Lastname:</p>
      <input value={lastname} onChange={onLastnameChange} />
      <p>Height:</p>
      <input value={height} onChange={onHeightChange} />
      <p>Weight:</p>
      <input value={weight} onChange={onWeightChange} />
      <br />
      <br />
      <button onClick={onContinuePressed} >Continue</button>
    </div>
  )
}