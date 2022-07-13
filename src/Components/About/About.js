import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserModel } from '../../Store/App/selectors';

export const About = () => {
  const userModel = useSelector(selectUserModel);
  return (
    <div>
      <p>Name:</p>
      <p>{userModel.name}</p>
      <p>Lastname:</p>
      <p>{userModel.lastname}</p>
      <p>Height:</p>
      <p>{userModel.height}</p>
      <p>Weight/:</p>
      <p>{userModel.weight}</p>
    </div>
  );
}