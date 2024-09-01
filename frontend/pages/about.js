import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';

const teamMembers = [
    {
        name: 'Ankit Raj',
        role: 'Founder & Developer',
        initials: 'AR',
        description: 'Ankit is the visionary behind the app, driving the team towards excellence with his passion for technology and innovation.',
    },
    // Add more team members as needed
];

export default function About() {
    return (
        <Container style={{ minHeight: '80vh', paddingTop: '20px' }}>
            <Typography variant="h2" gutterBottom>
                About Us
            </Typography>

            <Typography variant="h5" gutterBottom>
                Introduction
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to our application! We are dedicated to providing the best service to our users. Our mission is to make your life easier through technology.
            </Typography>

            <Typography variant="h5" gutterBottom>
                Our Story
            </Typography>
            <Typography variant="body1" paragraph>
                Our journey began when we noticed a gap in the market for a tool that simplifies [describe what your app does]. Driven by a desire to solve this problem, we assembled a team of talented individuals to bring our vision to life.
            </Typography>

            <Typography variant="h5" gutterBottom>
                Our Team
            </Typography>
            <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper style={{ padding: 16, textAlign: 'center' }}>
                            <Avatar
                                style={{
                                    width: 100,
                                    height: 100,
                                    margin: '0 auto 16px',
                                    backgroundColor: '#3f51b5',
                                    color: '#fff',
                                    fontSize: '36px',
                                }}
                            >
                                {member.initials}
                            </Avatar>
                            <Typography variant="h6">{member.name}</Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {member.role}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {member.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" gutterBottom style={{ marginTop: 40 }}>
                Our Values and Goals
            </Typography>
            <Typography variant="body1" paragraph>
                We believe in [mention core values like integrity, innovation, customer focus]. Our goal is to continuously improve and deliver top-quality service to our users.
            </Typography>

            <Typography variant="h5" gutterBottom style={{ marginTop: 40 }}>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                Have questions? Want to collaborate? Reach out to us at [email@example.com] or call us at [123-456-7890].
            </Typography>
        </Container>
    );
}
