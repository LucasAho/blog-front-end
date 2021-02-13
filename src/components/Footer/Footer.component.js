import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, BottomNavigation, Button, Modal, BottomNavigationAction, Typography, TextField } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        padding: '1rem',
        backgroundColor: "#180D35",
        color: "#FFF"
    },
    botNav: {
        backgroundColor: "#180D35",
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function BlogBar() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const modalBody = (
        <div style={modalStyle} className={classes.paper}>
            <form name="contact" action="/contact" method="post" >
                <input type="hidden" name="form-name" value="contact"/>
                <TextField required label="Full Name" name="name"/>
                <TextField required label="Email" name="email"/>
                <TextField required fullWidth multiline rows={4} label="Message" name="message"/>
                <Button type="submit">Send</Button>
            </form>
        </div>
    );
    return (
        <Box className={classes.root} mx='auto' align="center">
            <BottomNavigation className={classes.botNav}>
                <BottomNavigationAction
                    component={"a"}
                    href="https://www.linkedin.com/in/lucas-asher-679569193/"
                    label="LinkedIn"
                    icon={<LinkedInIcon color="secondary" />}
                />
                <BottomNavigationAction
                    component={"a"}
                    href="https://www.instagram.com/lucas_asher_a/"
                    label="Instagram"
                    icon={<InstagramIcon color="secondary" />}
                />
                <BottomNavigationAction
                    component={"a"}
                    href="https://github.com/LucasAho"
                    label="GitHub"
                    icon={<GitHubIcon color="secondary" />}
                />
                <BottomNavigationAction
                    label="ContactMe"
                    onClick={handleOpen}
                    icon={<EmailIcon color="secondary" />}
                />
            </BottomNavigation>
            <Typography align='center' className={"crText"} variant="caption">
                ©Copyright. All rights reserved
            </Typography>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {modalBody}
            </Modal>
        </Box>
    );
}