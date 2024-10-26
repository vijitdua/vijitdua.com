import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Alert,
    CircularProgress
} from '@mui/material';
import { getServices } from "../../service/serviceStatusService";
import { submitBugReport } from "../../service/bugReportService";

const BugReport = () => {
    const [services, setServices] = useState([]);
    const [selectedServiceId, setSelectedServiceId] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const data = await getServices();
            setServices(data);
            setError(false);
        } catch (error) {
            console.error('Failed to fetch services:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedServiceId || !description) {
            setSubmitStatus('Please select a service and provide a description.');
            return;
        }

        try {
            await submitBugReport(selectedServiceId, description, email);
            setSubmitStatus('Bug report submitted successfully.');
            setSelectedServiceId('');
            setDescription('');
            setEmail('');
        } catch (error) {
            setSubmitStatus('Failed to submit bug report.');
            console.error('Error submitting bug report:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto', mt: 3 }}>
            <Typography variant='h1' align='center' gutterBottom>
                Submit a Bug Report
            </Typography>
            {submitStatus && <Alert severity="info">{submitStatus}</Alert>}

            {error ? (
                <Alert severity="error" sx={{ mt: 2, width: '80%', mx: 'auto' }}>
                    Failed to load services. Please try again later.
                </Alert>
            ) : loading ? (
                <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ width: '80%', mx: 'auto' }}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="service-label">Service</InputLabel>
                        <Select
                            labelId="service-label"
                            id="service"
                            value={selectedServiceId}
                            label="Service"
                            onChange={(e) => setSelectedServiceId(e.target.value)}
                            variant="standard"
                        >
                            <MenuItem value="">
                                <em>-- Select a Service --</em>
                            </MenuItem>
                            {services.map((service) => (
                                <MenuItem key={service.serviceId} value={service.serviceId}>
                                    {service.serviceName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Email (optional)"
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        variant="standard"
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                        required
                        variant="standard"
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                        Submit Bug Report
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default BugReport;
