import React, {useEffect, useRef, useState} from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import {Box, Button, Typography} from "@mui/material";

function PdfViewer({fileOrUrl}) {
    const [pdfDocument, setPdfDocument] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isUrl, setIsUrl] = useState(null);
    const canvasRef = useRef(null);
    const [renderTask, setRenderTask] = useState(null); // Track the current render task

    useEffect(() => {
        const loadPdf = async () => {
            let url = '';

            if (fileOrUrl instanceof File) {
                url = URL.createObjectURL(fileOrUrl);
                setIsUrl(false);
            } else {
                url = fileOrUrl;
                setIsUrl(true);
            }

            try {
                const loadingTask = pdfjsLib.getDocument(url);
                const loadedPdf = await loadingTask.promise;
                setPdfDocument(loadedPdf);
                renderPage(1, loadedPdf); // Render the first page initially
            } catch (error) {
                console.error('Error loading PDF:', error);
            }

            return () => {
                if (fileOrUrl instanceof File) {
                    URL.revokeObjectURL(url); // Clean up URL if it's a local file
                }
            };
        };

        loadPdf();
    }, [fileOrUrl]);

    const renderPage = async (pageNum, pdfDoc) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Cancel the previous rendering task if it's still ongoing
        if (renderTask) {
            renderTask.cancel();
        }

        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({scale: 1.5});

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };

        // Start rendering the page
        const task = page.render(renderContext);
        setRenderTask(task); // Store the current render task

        try {
            await task.promise;
        } catch (err) {
            if (err.name !== 'RenderingCancelledException') {
                console.error('Error rendering page:', err);
            }
        }
    };

    const nextPage = () => {
        if (pageNumber < pdfDocument.numPages) {
            const newPageNumber = pageNumber + 1;
            setPageNumber(newPageNumber);
            renderPage(newPageNumber, pdfDocument);
        }
    };

    const prevPage = () => {
        if (pageNumber > 1) {
            const newPageNumber = pageNumber - 1;
            setPageNumber(newPageNumber);
            renderPage(newPageNumber, pdfDocument);
        }
    };

    return (
        <>
            <Box sx={{
                textAlign: 'center',
                margin: '1rem 0',
                padding: '1rem',
                backgroundColor: '#313131',
                boxShadow: '10px 10px 10px #151515',
                borderRadius: '20px',
            }}>
                <canvas ref={canvasRef} style={{marginTop: '0.25rem', width: '100%'}}/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Button onClick={prevPage} disabled={pageNumber <= 1}>Previous</Button>
                    <Typography
                        style={{margin: '0 1rem'}}>Page {pageNumber} of {pdfDocument?.numPages || 0}</Typography>
                    <Button onClick={nextPage}
                            disabled={pdfDocument && pageNumber >= pdfDocument.numPages}>Next</Button>
                </Box>
            </Box>
            {isUrl && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', padding: '1rem' }}>
                    <Button
                        href={fileOrUrl}
                        download
                        variant="contained"
                    >
                        Download PDF
                    </Button>
                </Box>
            )}
        </>
    );
}

export default PdfViewer;
