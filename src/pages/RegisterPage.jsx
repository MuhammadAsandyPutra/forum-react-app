import { GiDiscussion } from 'react-icons/gi';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/authUser/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate('/');
  };

  return (
    <section className="grid grid-cols-2 min-h-screen">
      <header className="flex items-center justify-center text-4xl bg-blue-500 text-white p-4">
        <h1><GiDiscussion size={300} /></h1>
      </header>
      <article className="flex gap-4 justify-center flex-col p-16">
        <h2 className="font-light text-5xl">Create your account</h2>
        <RegisterInput register={onRegister} />

        <p className="text-gray-700">
          Already have an account?
          {' '}
          <Link className="text-blue-500 underline" to="/">Login</Link>
        </p>
      </article>
    </section>
  );
};

export default RegisterPage;
