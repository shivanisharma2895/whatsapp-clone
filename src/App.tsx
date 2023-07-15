import React from 'react';

import './App.scss';
import ContactList from './components/contactList';
import ConversationComponent from './components/conversation'

function App() {
  return (
    <div className='app-container'>
      <ContactList />
      <ConversationComponent />
    </div>
  )
}

export default App;
