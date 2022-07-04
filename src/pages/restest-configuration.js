import * as React from 'react';
import Head from 'next/head';
import { Box, Card, CardContent, Switch, Container, Grid, TextField, Typography, FormControlLabel, Select, MenuItem } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';



const RestestConfiguration = () => {
    const [loading, setLoading] = React.useState(true);
    const [APISettings, setAPISettings] = React.useState();

    return (
        <>
            <Head>
                <title>
                    RESTest Configuration | RESTest
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
                        RESTest Configuration
                    </Typography>
                    <Card>
                        <CardContent>
                            <Grid
                                container
                                spacing={3}>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Experiment name"
                                        variant="standard"
                                        helperText="Identifier of the experiment performed. Used for folder names where test reports are generated (under target folder) and for the package name of the generated test classes." />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Classes name"
                                        variant="standard"
                                        helperText="Name of the generated test classes." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="OAS path"
                                        variant="standard"
                                        helperText="Path to the OpenAPI specification file."
                                        required />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Configuration path"
                                        variant="standard"
                                        helperText="Path to the test configuration file generated from the OpenAPI specification file."
                                        required />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Target path"
                                        variant="standard"
                                        helperText="Directory where to store Java test classes." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Allure results path"
                                        variant="standard"
                                        helperText="Directory where to store the test cases and results in Allure format." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Allure report path"
                                        variant="standard"
                                        helperText="Directory where to store the Allure reports." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="CSV stats files path"
                                        variant="standard"
                                        helperText="Directory where to store the CSV coverage data files." />
                                </Grid>
                                <Grid
                                    item
                                    lg={9}
                                    md={9}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Log path"
                                        variant="standard"
                                        disabled={!loading}
                                        helperText="Path to log file. Don't set a file extension, as RESTest will set .log extension by default." />
                                </Grid>
                                <Grid
                                    item
                                    lg={3}
                                    md={3}
                                    xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={loading}
                                                onChange={() => setLoading(!loading)}
                                                name="loading"
                                                color="primary"
                                            />
                                        }
                                        label="Save logs to file" />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12} />
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Number of test cases per operation"
                                        variant="standard"
                                        helperText="Number of test cases to generate per operation. For instance, if you test 4 operations and set this parameter to 5, 20 test cases will be generated in each iteration." />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Delay between iterations (seconds)"
                                        variant="standard"
                                        helperText="Delay in seconds between iterations." />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <Select
                                        fullWidth
                                        label="Generator"
                                        value={'RT'}
                                        variant="standard">
                                        <MenuItem value={'RT'}>Random Testing</MenuItem>
                                        <MenuItem value={'CBT'}>Constraint-based Testing</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Total number of tests cases"
                                        variant="standard" />
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={loading}
                                                onChange={() => setLoading(!loading)}
                                                name="loading"
                                                color="primary"
                                            />
                                        }
                                        label="No limit" />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Ratio of faulty test cases to generate"
                                        variant="standard"
                                        helperText="Ratio (0-1) of faulty test cases to generate. A faulty test case is one that uses invalid request data and therefore expects a client error response from the API (4XX status code)." />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Ratio of faulty dependencies"
                                        variant="standard"
                                        helperText="Ratio (0-1) of faulty test cases to generate due to inter-parameter dependencies. These test cases violate one or more inter-parameter dependencies present in the operation and therefore are considered faulty." />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Number of requests using the same randomly generated input data"
                                        variant="standard"
                                        helperText="Number of requests using the same randomly generated input data." />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Number of values used for each parameter when reloading input data"
                                        variant="standard"
                                        helperText="Number of values used for each parameter when reloading input data." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={loading}
                                                onChange={() => setLoading(!loading)}
                                                name="loading"
                                                color="primary"
                                            />
                                        }
                                        label="Generate a report of the input coverage." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={loading}
                                                onChange={() => setLoading(!loading)}
                                                name="loading"
                                                color="primary"
                                            />
                                        }
                                        label="Generate a report of the output coverage." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={loading}
                                                onChange={() => setLoading(!loading)}
                                                name="loading"
                                                color="primary"
                                            />
                                        }
                                        label="Generate statistics of the test cases." />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={loading}
                                                onChange={() => setLoading(!loading)}
                                                name="loading"
                                                color="primary"
                                            />
                                        }
                                        label="Don't keep the statistics and Allure reports of previous tests." />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
};

RestestConfiguration.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default RestestConfiguration;
