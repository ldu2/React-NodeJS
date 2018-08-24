import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export const HomeItems = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
    </div>
);

export const gitItems = (
    <div>
        <ListItem button component={Link} to="/address">
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Address" />
        </ListItem>
    </div>
);

export const demoItems = (
    <div>
        <ListItem button component={Link} to="/init-db">
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="InitializeDatabase" />
        </ListItem>
    </div>
);
