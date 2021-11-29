import { connect } from 'socket.io-client';
import React from 'react';

export const socket = connect('http://192.168.1.7:5000');
export const SocketContext = React.createContext();