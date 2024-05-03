import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

const ThreadList = ({ threads, upVote, downVote }) => (
  <div className="m-6">
    {
        threads.map((thread) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ThreadItem key={thread.id} {...thread} upVote={upVote} downVote={downVote} />
        ))
      }
  </div>
);

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadList;
