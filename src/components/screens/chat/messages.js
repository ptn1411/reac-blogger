import React from 'react'
import Message from './message';
import STB from 'react-scroll-to-bottom';
const Messages = ({ messages, user_id }) => {
    return (
        <STB className="messages">
            {messages.map((message, i) => (
                <Message key={message.id} message={message} current_uid={user_id} />
            ))}
        </STB>
    )
}

export default Messages
