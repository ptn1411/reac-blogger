import React, {useState, useEffect} from 'react';
import HeadMeta from "../parts/head";
import {useParams} from 'react-router-dom';
import {isAuthenticated} from "../../auth";
import io from 'socket.io-client';
import Messages from './chat/messages';
let socket;
const Chat = () => {

    let {room_id} = useParams();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPT = process.env.REACT_APP_WS;

    useEffect(() => {
        socket = io(ENDPT, {
            withCredentials: true,
            transports: ['websocket']
        });
        const user_id = isAuthenticated().user.uuid;
        const firstName = isAuthenticated().user.firstName;
        socket.emit('join', {
            name: firstName,
            room_id,
            user_id: user_id
        });
    }, [room_id, ENDPT]);
    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message])
        })
    }, [messages])

    useEffect(() => {
        socket.emit('get-messages-history', room_id)
        socket.on('output-messages', messages => {
            setMessages(messages)
        })
    }, [room_id])
    const sendMessage = event => {
        event.preventDefault();
        if (event.keyCode === 13){
            if (message) {
                socket.emit('sendMessage', message, room_id, () => setMessage(''))
            }
        }else {
            if (message) {
                socket.emit('sendMessage', message, room_id, () => setMessage(''))
            }
        }

    }
    const head = {
        title: 'Message',
        description: 'Nam dep trai',
        keywords: 'Nam dep trai,react',
        robots: 'noindex,nofollow'
    }


    return (
        <>
            <HeadMeta head={head}/>
            <div>
                <h1 className="text-center">Chat</h1>
                <div className="mb-5">
                    <div className="container py-5 px-4">
                        <div className="row rounded-lg overflow-hidden shadow">

                            <div className="col-5 px-0">
                                <div className="bg-white">

                                    <div className="bg-gray px-4 py-2 bg-light">
                                        <p className="h5 mb-0 py-1">Recent</p>
                                    </div>

                                    <div className="messages-box">
                                        <div className="list-group rounded-0">
                                            <a className="list-group-item list-group-item-action active text-white rounded-0">
                                                <div className="media"><img
                                                    src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
                                                    alt="user" width="50" className="rounded-circle"/>
                                                    <div className="media-body ml-4">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between mb-1">
                                                            <h6 className="mb-0">Jason Doe</h6><small
                                                            className="small font-weight-bold">25 Dec</small>
                                                        </div>
                                                        <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit
                                                            amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt ut labore.</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="#"
                                               className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                <div className="media"><img
                                                    src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
                                                    alt="user" width="50" className="rounded-circle"/>
                                                    <div className="media-body ml-4">
                                                        <div
                                                            className="d-flex align-items-center justify-content-between mb-3">
                                                            <h6 className="mb-0">Jason Doe</h6><small
                                                            className="small font-weight-bold">21 Aug</small>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem
                                                            ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                            eiusmod tempor incididunt ut labore.</p>
                                                    </div>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-7 px-0">
                                <div className="px-4 py-5 chat-box bg-white">
                                    <Messages messages={messages} user_id={isAuthenticated().user.uuid} />

                                </div>


                                <form className="bg-light">
                                    <div className="input-group">
                                        <input type="text" placeholder="Type a message" aria-describedby="button-addon2"
                                               className="form-control rounded-0 border-0 py-4 bg-light"
                                               value={message}
                                               onChange={e => setMessage(e.target.value)}

                                        />
                                        <div className="input-group-append">
                                            <button onClick={sendMessage}
                                                    onKeyPress={(event) => sendMessage(event)}
                                                    className="btn btn-link"><i
                                                className="fa fa-paper-plane"/></button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Chat;