import React from 'react';
import PropTypes from 'prop-types';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { MdLeaderboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navigation = ({ authUser, signOut }) => {
  const { id, name, avatar } = authUser;

  return (
    <div className="navigation bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold" style={{ textDecoration: 'none' }}>
        Forum App By
        {' '}
        <span className="text-red-300">{authUser.name}</span>
      </Link>
      <nav>
        <Link to="/" className="nav-link flex items-center mr-4">
          Thread
          <BsFillChatQuoteFill className="ml-1" />
        </Link>
        <Link to="/leaderboard" className="nav-link flex items-center">
          Leaderboard
          {' '}
          <MdLeaderboard className="ml-1" />
        </Link>
      </nav>
      <div className="nav__user-info flex items-center">
        <img src={avatar} alt={id} title={name} className="w-10 h-10 rounded-full mr-2" />
        <button type="button" onClick={signOut} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm">
          Log out
        </button>
      </div>
    </div>
  );
};

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
