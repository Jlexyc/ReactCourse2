import { useCallback } from 'react'
import { useNavigate } from "react-router-dom";

export const RegistrationScreen1 = () => {
  const navigate = useNavigate();

  const onRegisterWithEmail = useCallback(() => {
    navigate('/register/email')
  })

  return (
    <div>
      <button onClick={onRegisterWithEmail}>Register with Email</button>
    </div>
  )
}