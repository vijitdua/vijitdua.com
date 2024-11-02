import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Alert,
    CircularProgress, Container
} from '@mui/material';
import { sendContactMessage } from '../../service/contactService';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [showHelperText, setShowHelperText] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message || message.length > 2000) {
            setSubmitStatus('Message is required and must be under 2000 characters.');
            return;
        }

        setLoading(true);
        setSubmitStatus('');

        try {
            await sendContactMessage({ name, message, contact });
            setSubmitStatus('Contact message sent successfully.');
            setName('');
            setMessage('');
            setContact('');
        } catch (error) {
            setSubmitStatus('Failed to send contact message.');
            console.error('Error sending contact message:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto' }}>
                <Typography variant="body1" mb={4} textAlign="center">
                    You can fill out the form below to send me an (optionally anonymous) message.
                    For important communication, please email me.
                </Typography>

            {submitStatus && <Alert severity="info" sx={{ mb: 2 }}>{submitStatus}</Alert>}

            <TextField
                label="Name (optional)"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                variant="standard"
            />
            <TextField
                label="Contact (optional)"
                fullWidth
                value={contact}
                onChange={(e) => {
                    setContact(e.target.value);
                    setShowHelperText(e.target.value.length > 0);
                }}
                margin="normal"
                variant="standard"
                helperText={showHelperText ? "Provide your email, or type 'Instagram: @', 'discord:', or any preferred contact method." : ''}
            />
            <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                margin="normal"
                required
                variant="standard"
            />
            {loading ? (
                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                    Send Message
                </Button>
            )}
        </Box>
    );
};

export default ContactForm;