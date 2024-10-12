import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

// URLs can be a mix of images, GIFs, and video links
const multimediaData = [
    { type: 'image', url: 'https://example.com/image1.jpg' },
    { type: 'gif', url: 'https://example.com/animation1.gif' },
    { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { type: 'image', url: 'https://example.com/image2.jpg' },
    { type: 'gif', url: 'https://example.com/animation2.gif' },
];

function MultimediaCarousel({ data = multimediaData, autoScrollInterval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next item
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    // Function to go to the previous item
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(handleNext, autoScrollInterval);
        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [currentIndex]);

    // Render current media (image, GIF, video)
    const renderMedia = (item) => {
        switch (item.type) {
            case 'image':
            case 'gif':
                return (
                    <Box
                        component="img"
                        src={item.url}
                        alt="multimedia"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain', // Ensures the media is fully visible
                        }}
                    />
                );
            case 'video':
                return (
                    <Box
                        component="iframe"
                        src={item.url}
                        title="multimedia-video"
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        allowFullScreen
                    />
                );
            default:
                return <Typography>Unsupported media type</Typography>;
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                width: '100%',  // Scale to available width
                maxWidth: '800px',  // Max width of 800px
                aspectRatio: '16 / 9',  // Maintains 16:9 aspect ratio
                margin: '0 auto',
                overflow: 'hidden',
                backgroundColor: '#000',  // Optional: provide a background for small images
            }}
        >
            {/* Left arrow button */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: 0.7,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a subtle background for better visibility
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)', // Adds a slight shadow
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darkens on hover
                    },
                }}
            >
                <ArrowBack fontSize="large" />
            </IconButton>

            {/* Media container */}
            <Box sx={{ width: '100%', height: '100%' }}>
                {renderMedia(data[currentIndex])}
            </Box>

            {/* Right arrow button */}
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    opacity: 0.7,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a subtle background for better visibility
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)', // Adds a slight shadow
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darkens on hover
                    },
                }}
            >
                <ArrowForward fontSize="large" />
            </IconButton>

            {/* Progress dots at the bottom */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                }}
            >
                {data.map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: currentIndex === index ? '#fff' : '#888',
                            transition: 'background-color 0.3s',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default MultimediaCarousel;
