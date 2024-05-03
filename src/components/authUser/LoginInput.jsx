import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        type="button"
        onClick={() => login({ email, password })}
        className="mt-3 w-full px-4 py-2 text-white bg-blue-500 rounded-lg font-semibold cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
