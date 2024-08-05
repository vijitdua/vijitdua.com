import React, { useEffect, useState } from 'react';

function PdfViewer({ fileOrUrl, minHeight = '75rem' }) {
    const [fileUrl, setFileUrl] = useState('');

    useEffect(() => {
        if (fileOrUrl instanceof File) {
            // Create a URL for the file if it's a local file
            const url = URL.createObjectURL(fileOrUrl);
            setFileUrl(url);
            return () => URL.revokeObjectURL(url); // Clean up the URL when the component is unmounted or file changes
        } else {
            // Directly use the URL if it's already a URL string
            setFileUrl(fileOrUrl);
        }
    }, [fileOrUrl]);

    return (
        <div>
            <iframe
                src={fileUrl}
                width="100%"
                height="100%"
                style={{ minHeight: minHeight, marginTop: '1rem', }} // You can adjust the height as needed
                frameBorder="0"
            >
                This browser does not support PDFs. Please download the PDF to view it: <a href={fileUrl}>Download PDF</a>
            </iframe>
        </div>
    );
}

export default PdfViewer;
