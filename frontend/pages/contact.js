import { Container, Typography,Box } from '@mui/material';

export default function Contact() {
    return (
        <Container style={{ minHeight: '80vh', paddingTop: '20px' }}>
            <Typography variant="h2" gutterBottom>
                Contact Page
            </Typography>
            <Box marginBottom={2}>
                <Typography variant="body1">
                    This is the contact page. Feel free to reach out to us for any inquiries or support.
                </Typography>
            </Box>
        </Container>
    );
}
