import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link href="/" passHref>
                        My Fullstack App
                        </Link>
                    </Typography>
                    <Button color="inherit">
                        <Link href="/" passHref>
                            <Typography variant="button" sx={{ color: 'inherit' }}>
                                Home
                            </Typography>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/about" passHref>
                            <Typography variant="button" sx={{ color: 'inherit' }}>
                                About
                            </Typography>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/contact" passHref>
                            <Typography variant="button" sx={{ color: 'inherit' }}>
                                Contact
                            </Typography>
                        </Link>
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
