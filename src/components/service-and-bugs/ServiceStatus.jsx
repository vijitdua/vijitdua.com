import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Skeleton, Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { getServices } from "../../service/serviceStatusService";
import {formatRelativeTime} from "../../utilities/dateFormatting";

const ServiceStatus = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchServiceStatuses();
    }, []);

    const fetchServiceStatuses = async () => {
        try {
            const data = await getServices();
            setServices(data);
            setError(false);
        } catch (error) {
            console.error('Failed to fetch service statuses:', error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box>
            <Typography variant='h1' align='center' gutterBottom>
                Service Status
            </Typography>

            {error ? (
                <Alert severity="error" sx={{ width: '80%', mx: 'auto', mt: 2 }}>
                    Failed to load service statuses. Please try again later.
                </Alert>
            ) : (
                <List sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
                    {loading
                        ? Array.from(new Array(3)).map((_, index) => (
                            <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
                                <Skeleton variant="text" width="80%" height={40} />
                                <Skeleton variant="rectangular" width={30} height={30} sx={{ my: 1 }} />
                                <Divider sx={{ width: '80%', mx: 'auto' }} />
                            </ListItem>
                        ))
                        : services.map((service, index) => (
                            <React.Fragment key={service.serviceId}>
                                <ListItem
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        py: 2
                                    }}
                                >
                                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                                        <Grid item xs={12}>
                                            <ListItemText
                                                primary={service.serviceName}
                                                secondary={
                                                    (service.status === 'down' && service.downSince)
                                                        ?
                                                        <Typography variant="caption" style={{ whiteSpace: 'pre-line' }}>
                                                            {`Down since ${formatRelativeTime(new Date(service.downSince))}\nLast checked ${formatRelativeTime(new Date(service.lastChecked))}`}
                                                        </Typography>
                                                        :
                                                        <Typography variant="caption" style={{ whiteSpace: 'pre-line' }}>
                                                            {`Last checked ${formatRelativeTime(new Date(service.lastChecked))}`}
                                                        </Typography>
                                                }
                                            />
                                        </Grid>
                                        <Grid item>
                                            <ListItemIcon>
                                                {service.status === 'up' ? (
                                                    <CheckCircleIcon color="success" />
                                                ) : (
                                                    <CancelIcon color="error" />
                                                )}
                                            </ListItemIcon>
                                        </Grid>
                                        {service.type === 'Frontend' && service.url && (
                                            <Grid item>
                                                <IconButton
                                                    href={service.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Visit Service"
                                                >
                                                    <InsertLinkIcon />
                                                </IconButton>
                                            </Grid>
                                        )}
                                    </Grid>
                                </ListItem>
                                {index < services.length - 1 && <Divider sx={{ width: '80%', mx: 'auto' }} />}
                            </React.Fragment>
                        ))}
                </List>
            )}
        </Box>
    );
};

export default ServiceStatus;
