import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

function MyApp({ Component, pageProps }) {
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            minHeight="100vh"
        >
            <Header />
            <Container component="main" sx={{ flexGrow: 1, py: 2 }}>
                <Component {...pageProps} />
            </Container>
            <Footer />
        </Box>
    );
}

export default MyApp;
