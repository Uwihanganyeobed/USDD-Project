import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
function App() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendSMS = async () => {
        try {
            const res = await axios.post('https://usdd-project.onrender.com/send-sms', {
                to: phoneNumber,
                message: message,
            });
            setResponse(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <h1>Send SMS with Africa's Talking</h1>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
                placeholder="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendSMS}>Send SMS</button>
            {response && <p>Response: {JSON.stringify(response)}</p>}
        </div>
    );
}

export default App;
