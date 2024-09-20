const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const africastalking = require('africastalking')({
    apiKey: 'atsk_96471cdf5ee9e0b554dc8f68f56ab83606ec0a1eeeca755ee16644e2ef13c283937fee10', // Replace with your Africa's Talking API key
    username: 'sandbox',
});

const sms = africastalking.SMS;
const app = express();

app.use(bodyParser.json());
app.use(cors({origin: 'https://usdd-project-1.onrender.com'}));

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to Africa’s Talking SMS API');
});

// Send SMS endpoint
app.post('/send-sms', async (req, res) => {
    const { to, message } = req.body;
    const options = {
        to: [to],
        message: message,
        from: 'Vargas' // Optional
    };

    try {
        const response = await sms.send(options);
        res.json(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
