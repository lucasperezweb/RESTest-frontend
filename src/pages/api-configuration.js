import * as React from 'react';
import Head from 'next/head';
import { Box, Card, CardContent, Switch, Container, Grid, TextField, Typography, FormControlLabel, Select, MenuItem, CardHeader, Divider, InputLabel } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';



const APIConfiguration = () => {

    return (
        <>
            <Head>
                <title>
                    API Configuration | RESTest
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
                        API Configuration
                    </Typography>
                    <Card>
                        <CardHeader
                            subheader="Put something here bro!"
                            title="Authentication data"
                        />
                        <Divider />
                        <CardContent>
                            <Grid
                                container
                                spacing={3}>
                                <Grid
                                    item
                                    lg={4}
                                    md={4}
                                    xs={12}>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Type"
                                        variant='standard'
                                    >
                                        <MenuItem value={10}>API Key</MenuItem>
                                        <MenuItem value={20}>Bearer Token</MenuItem>
                                        <MenuItem value={30}>Basic Auth</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid
                                    item
                                    lg={8}
                                    md={8}
                                    xs={0}>
                                </Grid>
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Key"
                                        variant="standard" />
                                </Grid>
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Value"
                                        variant="standard" />
                                </Grid>
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}>
                                    <InputLabel id="demo-simple-select-label" variant='standard'>Add to</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Add to"
                                        variant='standard'
                                    >
                                        <MenuItem value={10}>Header</MenuItem>
                                        <MenuItem value={20}>Query Params</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader
                            subheader="Put something here!"
                            title="Filters"
                        />
                        <Divider />
                        <CardContent>
                            <Grid
                                container
                                spacing={3}>
                                <Grid
                                    item
                                    lg={4}
                                    md={4}
                                    xs={12}>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Type"
                                        variant='standard'
                                    >
                                        <MenuItem value={10}>API Key</MenuItem>
                                        <MenuItem value={20}>Bearer Token</MenuItem>
                                        <MenuItem value={30}>Basic Auth</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid
                                    item
                                    lg={8}
                                    md={8}
                                    xs={0}>
                                </Grid>
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Key"
                                        variant="standard" />
                                </Grid>
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Value"
                                        variant="standard" />
                                </Grid>
                                <Grid
                                    item
                                    lg={4}
                                    md={6}
                                    xs={12}>
                                    <InputLabel id="demo-simple-select-label" variant='standard'>Add to</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Add to"
                                        variant='standard'
                                    >
                                        <MenuItem value={10}>Header</MenuItem>
                                        <MenuItem value={20}>Query Params</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
};

APIConfiguration.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default APIConfiguration;