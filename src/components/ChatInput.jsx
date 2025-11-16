import {Chatbot} from 'supersimpledev';

import './ChatInput.css';

/** Component that returns the input and button of the chatbot*/
      
  
  function ChatInput({input,setInput,setChatMessages}) {

        function setInputText(event){
          setInput(event.target.value);
        }

        //triggered upon hitting send
        function sendMessage(){
          // General syntax of a new message instance.
          const newMessage = {
              message: input, // Text inside the textbox passed as prop to the ChatInput Cpmonent
              sender: "user",
              id: crypto.randomUUID()
            };

          setChatMessages(chatMessages =>[
            ...chatMessages,
            newMessage
          ]);

          const response = Chatbot.getResponse(input); 
          const chatbotMessage = {
              message: response, 
              sender: "robot",
              id: crypto.randomUUID()
          }

          setChatMessages(chatMessages => [
            ...chatMessages,
            chatbotMessage
          ]);

          setInput(''); //clear the input text after sending messages but not the HTML  
        }
        return (
          
            <div className="chat-input-container">
            
            <input
              placeholder="Send a message to YannAI"
              size="30"
              onChange={setInputText}
              value={input} //Controlled input to empty the textbo
              className="chat-input"
            />
            <button
              onClick={sendMessage} 
              className="send-button"
              >Send</button>
              
              
            </div>
             
          
        );
      }

export default ChatInput