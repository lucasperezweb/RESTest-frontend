import * as React from 'react';
import Head from 'next/head';
import { Box, Card, CardContent, Switch, Container, Grid, TextField, Typography, FormControlLabel, Select, MenuItem } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';



const Help = () => {

    return (
        <>
            <Head>
                <title>
                    Bots | RESTest
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h4"
                    >
                        Bots
                    </Typography>
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h5"
                    >
                        Work in progress
                    </Typography>

                </Container>
            </Box>
        </>
    )
};

Help.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Help;
