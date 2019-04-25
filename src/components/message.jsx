import React from 'react';
import { emojify } from 'react-emojione';

const strToRGB = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return `#${"00000".substring(0, 6 - c.length)}${c}`;
};


const Message = ({ message }) => {
  return (
    <div className="message">
      <i>
        <span style={{ color: strToRGB(message.author) }}>{message.author}</span>
        <small>{new Date(message.created_at).toLocaleTimeString()}</small>
      </i>
      <p>{emojify(message.content)}</p>
    </div>
  );
};

export default Message;
