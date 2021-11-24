import React from 'react';

const Message = ({ message: { name, user_id, text }, current_uid }) => {
    let isCurrentUser = false;
    if (user_id === current_uid) {
        isCurrentUser = true;
    }
    return (
        isCurrentUser ? (
            <div className="media w-50 mb-3"><img
                src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user"
                width="50" className="rounded-circle"/>
                <div className="media-body ml-3">
                    <div className="bg-light rounded py-2 px-3 mb-2">
                        <p className="text-small mb-0 text-muted">{text}</p>
                    </div>
                    <p className="small text-muted">{name}</p>
                </div>
            </div>
        ) : (
            <div className="media w-50 ml-auto mb-3">
                <div className="media-body">
                    <div className="bg-primary rounded py-2 px-3 mb-2">
                        <p className="text-small mb-0 text-white">{text}</p>
                    </div>
                    <p className="small text-muted">{name}</p>
                </div>
            </div>
        )

    )
}

export default Message




