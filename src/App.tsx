import React from 'react';

import './App.scss';
import ContactList from './components/contactList';
import ConversationComponent from './components/conversationComponent';

function App() {
  return (
    <div className="container">
      <ContactList />
      <ConversationComponent />
    </div>
  );
}

export default App;
