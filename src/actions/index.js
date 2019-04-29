const apiURL = 'https://wagon-chat.herokuapp.com/';

// TODO: add and export your own actions
export const FECTH_MESSAGES = 'FECTH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANEL = 'SELECT_CHANEL';

export function fecthMessages(channel) {
  const promise = fetch(`${apiURL}/${channel}/messages`)
    .then(response => response.json());
  return {
    type: FECTH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const promise = fetch(`${apiURL}/${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author, content
    })
  }).then(response => response.json());
  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

