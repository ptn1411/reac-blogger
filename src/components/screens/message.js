import React, {useState, useEffect} from 'react';
import HeadMeta from "../parts/head";
import {Link} from "react-router-dom";

import io from 'socket.io-client';

let socket;

const Message = () => {

    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState([]);
    const ENDPT = process.env.REACT_APP_WS;
    useEffect(() => {
         socket = io(ENDPT, {
            withCredentials: true,
            transports: ['websocket']
        });
        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [ENDPT])
    useEffect(() => {
        socket.on('output-rooms', rooms => {
            setRooms(rooms)
        })
    }, [])
    useEffect(() => {
        socket.on('room-created', room => {
            setRooms([...rooms, room])
        })
    }, [rooms])

    const handleSubmit = e => {
        e.preventDefault();
        socket.emit('create-room', room);
        setRoom('');

    }
    const head = {
        title: 'Chat',
        description: 'Nam dep trai',
        keywords: 'Nam dep trai,react',
        robots: 'noindex,nofollow'
    }

    return (
        <>
            <HeadMeta head={head}/>
            <div>
                <h1 className="text-center">Message</h1>
                <div className="mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" value={room} onChange={(e) => setRoom(e.target.value)}/>
                                <button onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <div className="list-group">
                                        {rooms && rooms.map((room, index) => (
                                            <Link className="list-group-item list-group-item-action flex-column align-items-start"
                                                  to={'/chat/' + room.id + '/' + room.name}
                                                  key={index}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">{room.name}</h5>
                                                    <small>3 days ago</small>
                                                </div>
                                                <p className="mb-1">{room.name}</p>
                                                <small>Donec id elit non mi porta.</small>
                                            </Link>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );

}

export default Message;