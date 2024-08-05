import React, { useState } from 'react';
import { Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Collapsible({ children, title }) {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleToggle}>
                <Typography variant="h6">{title}</Typography>
                <IconButton size="small" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            <Collapse in={open}>
                <div style={{ marginTop: '8px' }}>
                    {children}
                </div>
            </Collapse>
        </>
    );
}

export default Collapsible;
