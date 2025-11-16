import { useState  } from 'react'

import ChatMessages from './components/ChatMessages';
import  ChatInput   from './components/ChatInput';

import './App.css'


function App() {
      
      const [inputText, setInputText] = useState('');
      const [chatMessages, setChatMessages] = useState(
      [
        {
          message: "hello chatbot",
          sender: "user",
          id: "id1"
        }, {
          message: "Hello! How can I help you?",
          sender: "robot",
          id: "id2"
        }, {
          message: "can you get me todays date?",
          sender: "user",
          id: "id3"
        }, {
          message: "Today is September 12",
          sender: "robot",
          id: "id4"
        }
      ]
    );
      return (
        <div className="app-container">
          
          <ChatMessages chatMessages={chatMessages} />
          <ChatInput
            input={inputText}
            setInput={setInputText}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages} />

        </div>
      );
    }


export default App
