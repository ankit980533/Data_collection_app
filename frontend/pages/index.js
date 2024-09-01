
// import { useState, useEffect } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { Button, TextField, Container, Typography, Grid, Paper } from '@mui/material';

// // Validation schema for Formik
// const DataSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     phone: Yup.string().required('Phone number is required'),
//     address: Yup.string().required('Address is required'),
// });

// export default function Home() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         // Fetch data from the backend
//         fetch('http://localhost:5000/api/data')
//             .then(response => response.json())
//             .then(data => setData(data));
//     }, []);

//     return (
//         <Container>
//             <Typography variant="h2" gutterBottom>
//                 Data List
//             </Typography>
//             <Paper style={{ padding: 16 }}>
//                 <Typography variant="h5" gutterBottom>
//                     Add New Data
//                 </Typography>
//                 <Formik
//                     initialValues={{ name: '', email: '', phone: '', address: '' }}
//                     validationSchema={DataSchema}
//                     onSubmit={(values, { resetForm }) => {
//                         fetch('http://localhost:5000/api/data', {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json',
//                             },
//                             body: JSON.stringify(values),
//                         })
//                             .then(response => response.json())
//                             .then(() => {
//                                 resetForm();
//                                 return fetch('http://localhost:5000/api/data');
//                             })
//                             .then(response => response.json())
//                             .then(data => setData(data));
//                     }}
//                 >
//                     {({ errors, touched }) => (
//                         <Form>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={6}>
//                                     <Field
//                                         name="name"
//                                         as={TextField}
//                                         label="Name"
//                                         fullWidth
//                                         margin="normal"
//                                         error={touched.name && !!errors.name}
//                                         helperText={touched.name && errors.name}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <Field
//                                         name="email"
//                                         as={TextField}
//                                         label="Email"
//                                         fullWidth
//                                         margin="normal"
//                                         error={touched.email && !!errors.email}
//                                         helperText={touched.email && errors.email}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <Field
//                                         name="phone"
//                                         as={TextField}
//                                         label="Phone"
//                                         fullWidth
//                                         margin="normal"
//                                         error={touched.phone && !!errors.phone}
//                                         helperText={touched.phone && errors.phone}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <Field
//                                         name="address"
//                                         as={TextField}
//                                         label="Address"
//                                         fullWidth
//                                         margin="normal"
//                                         error={touched.address && !!errors.address}
//                                         helperText={touched.address && errors.address}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Button type="submit" variant="contained" color="primary">
//                                         Submit
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                         </Form>
//                     )}
//                 </Formik>
//             </Paper>
//             <Typography variant="h5" gutterBottom style={{ marginTop: 20 }}>
//                 Submitted Data
//             </Typography>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item._id}>
//                         {item.name} - {item.email} - {item.phone} - {item.address}
//                     </li>
//                 ))}
//             </ul>
//         </Container>
//     );
// }
import { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Data List
            </Typography>
            <Paper style={{ padding: 16 }}>
                <List>
                    {data.map((item) => (
                        <ListItem key={item._id}>
                            <ListItemText
                                primary={`${item.name} - ${item.email}`}
                                secondary={`Phone: ${item.phone}, Address: ${item.address}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
                <Link href="/add-data" style={{ textDecoration: 'none', color: 'white' }}>
                    Add New Data
                </Link>
            </Button>
        </Container>
    );
}

