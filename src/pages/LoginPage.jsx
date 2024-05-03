import React from 'react';
import { GiDiscussion } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/authUser/LoginInput';
import { asyncSetAuthUser } from '../states/auth/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="grid grid-cols-2 min-h-screen">
      <header className="flex items-center justify-center text-4xl bg-blue-500 text-white p-4">
        <h1 className=""><GiDiscussion size={300} /></h1>
      </header>
      <article className="flex gap-4 justify-center flex-col p-16">
        <h2 className="font-light text-5xl">
          See
          {' '}
          <strong>The Discussion</strong>
          ,
          {' '}
          <br />
          Through Forum App's.
        </h2>
        <LoginInput login={onLogin} />
        <p className="text-gray-700">
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </article>
    </section>
  );
};

export default LoginPage;
