import React from 'react';
import ChatBot from 'react-simple-chatbot';

function App() {
  return (
    <div className="App">
      <h1>Simple ChatBot</h1>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello! How can I help you?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Great! Have a nice day!',
            end: true,
          },
        ]}
      />
    </div>
  );
}

export default App;
