import React, { useState } from "react";
import { Box, Typography, Button, Switch, FormControlLabel } from "@mui/material";

function InstrumentalToggle() {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <Box sx={{ mt: '2rem', textAlign: 'center' }}>
            {/* Toggle Label */}
            <FormControlLabel
                control={
                    <Switch
                        checked={showPlayer}
                        onChange={() => setShowPlayer((prev) => !prev)}
                        color="primary"
                    />
                }
                label="Toggle to play once of my songs"
                labelPlacement="start"
                sx={{ display: 'flex', justifyContent: 'center', mb: '1rem' }}
            />

            {/* Audio Player */}
            {showPlayer && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: '1rem',
                        p: '1rem',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant="body1" paragraph>
                        This is an instrumental track I made in 2020. Enjoy listening! <br/>
                        <Typography variant='caption'>
                            ps: it gets less repetitive towards the end 2:40 haha
                        </Typography>
                    </Typography>
                    <audio
                        controls
                        style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}
                    >
                        <source src={`${process.env.PUBLIC_URL}/assets/about/imperfect-compressed.mp3`} type="audio/mpeg" />
                        Your browser does not support the audio element.
                        <Button
                            variant="contained"
                            color="primary"
                            href={`${process.env.PUBLIC_URL}/assets/about/imperfect-compressed.mp3`}
                            download="Vijit_Instrumental.mp3"
                            sx={{ mt: '1rem' }}
                        >
                            Download
                        </Button>
                    </audio>
                </Box>
            )}
        </Box>
    );
}

export default InstrumentalToggle;
