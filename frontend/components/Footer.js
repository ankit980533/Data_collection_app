import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function Footer() {
    return (
        <Box mt={5} py={3} bgcolor="primary.main" color="primary.contrastText">
            <Container>
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} My Fullstack App. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}
