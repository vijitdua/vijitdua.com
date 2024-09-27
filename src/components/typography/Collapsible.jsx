import React, { useState } from 'react';
import { Typography, IconButton, Collapse } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Collapsible({ title, children }) {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleToggle}>
                <IconButton size="small" style={{ marginRight: '0.01rem', transition: 'transform 0.3s' }}>
                    {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                </IconButton>
                <Typography variant="h6">{title}</Typography>
            </div>
            <Collapse in={open}>
                <div style={{ marginTop: '0.25rem', marginLeft: '2rem'}}>
                    {children}
                </div>
            </Collapse>
        </>
    );
}

export default Collapsible;
