import React from 'react';
import { Button, Box } from '@mui/material';

function SocialMediaOvalItem({ item, index }) {
    return (
        <Button
            key={index}
            href={item.route}
            target={"_blank"}
            rel={"noopener noreferrer"}
            color="inherit"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '30rem',
                textDecoration: 'none',
                color: 'inherit',
                padding: '0.75rem 1rem',
                borderRadius: '20px',
                transition: '0.5s',
                backgroundColor: '#1f1f24',
                boxShadow: '0.35rem 0.22rem',
                '&:hover': {
                    backgroundColor: '#2c2c32',
                    transform: 'scale(1.05)',
                }
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px' }}>
                {item.icon}
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                {item.name}
            </Box>
        </Button>
    );
}

export default SocialMediaOvalItem;
