import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import Nzui from '../assets/nzui.jpg';

import './ChatMessage.css'
 
function ChatMessage({ message, sender }) {
       
        return (
          <div className = {
            sender === "user" 
            ? 'chat-message-user' 
            : 'chat-message-robot'
          }>
            {sender === 'robot' && (
              <img src={RobotProfileImage}  />
            )}
            <div className=
            'chat-message-text'>{message}</div>
            {sender === 'user' && (
              <img src={Nzui} />
            )}
          </div>
        );
      }
    

export default ChatMessage