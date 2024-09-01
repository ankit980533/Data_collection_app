import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Container, Typography, Paper, Box } from '@mui/material';
import Link from 'next/link';

// Validation schema for Formik
const DataSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
});

export default function AddData() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Add New Data
            </Typography>
            <Paper style={{ padding: 16 }}>
                <Formik
                    initialValues={{ name: '', email: '', phone: '', address: '' }}
                    validationSchema={DataSchema}
                    onSubmit={(values, { resetForm }) => {
                        fetch('http://localhost:5000/api/data', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values),
                        })
                            .then((response) => response.json())
                            .then(() => {
                                resetForm();
                                alert('Data Submitted Successfully!'); // Redirect to home page after submission
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                alert('Submission failed. Please try again.'); // Optional: Handle errors
                            });
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Box display="flex" flexDirection="column" gap={2}>
                                <Box>
                                    <Field
                                        name="name"
                                        as={TextField}
                                        label="Name"
                                        fullWidth
                                        margin="normal"
                                        error={touched.name && !!errors.name}
                                        helperText={touched.name && errors.name}
                                    />
                                </Box>
                                <Box>
                                    <Field
                                        name="email"
                                        as={TextField}
                                        label="Email"
                                        fullWidth
                                        margin="normal"
                                        error={touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                    />
                                </Box>
                                <Box>
                                    <Field
                                        name="phone"
                                        as={TextField}
                                        label="Phone"
                                        fullWidth
                                        margin="normal"
                                        error={touched.phone && !!errors.phone}
                                        helperText={touched.phone && errors.phone}
                                    />
                                </Box>
                                <Box>
                                    <Field
                                        name="address"
                                        as={TextField}
                                        label="Address"
                                        fullWidth
                                        margin="normal"
                                        error={touched.address && !!errors.address}
                                        helperText={touched.address && errors.address}
                                    />
                                </Box>
                                <Button type="submit" variant="contained" color="primary">
                                    Submit
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Paper>
            <Button variant="contained" color="secondary" style={{ marginTop: 20 }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
                    Back to Data List
                </Link>
            </Button>
        </Container>
    );
}
