const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`, // prompt("What is your username?")
};

export default initialState;
