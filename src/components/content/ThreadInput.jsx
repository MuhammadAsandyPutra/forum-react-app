import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const ThreadInput = ({ addThread }) => {
  const [title, onChangeTitle] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [body, setBody] = useState('');

  const onChangeBody = (event) => {
    setBody(event.target.innerText);
  };

  return (
    <form className="m-6">
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="Title"
        className="thread-input__title border rounded-md p-2 mb-2 w-full"
      />
      <input
        type="text"
        value={category}
        onChange={onChangeCategory}
        placeholder="Category (optional)"
        className="thread-input__category border rounded-md p-2 mb-2 w-full"
      />
      <div
        className="thread-input__body border rounded-md p-2 mb-2 w-full"
        data-testid="input-body"
        contentEditable
        onInput={onChangeBody}
      />
      <button
        type="submit"
        onClick={() => addThread({ title, body, category })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Thread
      </button>
    </form>
  );
};

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
