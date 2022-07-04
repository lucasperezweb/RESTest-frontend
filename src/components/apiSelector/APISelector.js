import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

import { Box, Button, Divider, Drawer, Typography, useMediaQuery, DialogTitle, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { Selector as SelectorIcon } from '../../icons/selector';

export const APISelector = () => {
    const [open, setOpen] = useState(false);
    const APIList = [
        {
            name: 'API 1',
            path: '/api/1'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
        {
            name: 'API 2',
            path: '/api/2'
        },
    ];

    return (
        <>
        <Box
            sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
            }}
            onClick={() => setOpen(true)}
        >
            <div>
                <Typography
                    color="inherit"
                    variant="subtitle1"
                >
                    Acme Inc
                </Typography>
                <Typography
                    color="neutral.400"
                    variant="body2"
                >
                    Your tier
                    {' '}
                    : Premium
                </Typography>
            </div>
            <SelectorIcon
                sx={{
                    color: 'neutral.500',
                    width: 14,
                    height: 14
                }}
            />
        </Box>

        {<Dialog
                open={open}
                onClose={() => setOpen(false)}>
                    <DialogTitle>Choose an API </DialogTitle>
                    <List sx={{ pt: 0 }}>
                        {APIList.map((api) => (
                            <ListItem>
                                <ListItemText primary={api.name} />
                            </ListItem>

                        ))}
                    </List>


            </Dialog>}


        </>
    );
};