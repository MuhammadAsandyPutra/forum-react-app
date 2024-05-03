import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <input type="text" value={name} onChange={onNameChange} placeholder="Name" className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" />
      <button type="button" onClick={() => register({ name, email, password })} className="mt-3 w-full px-4 py-2 text-white bg-blue-500 rounded-lg font-semibold cursor-pointer">Register</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
