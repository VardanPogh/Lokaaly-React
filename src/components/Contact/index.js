import React, {useState} from "react";
import NavBar from "../NavBar";
import Footer1 from "../Footer";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    contact: {
        minHeight: "calc(100vh - 380px)",
        padding: "120px 0",

        "& h1": {
            color: theme.palette.primary.main,
            fontSize: 32,
            fontWeight: "bold",
        },
        "& p": {
            marginTop: 24,
            color: theme.palette.secondary.dark,
            fontSize: 24,
            fontWeight: "bold",
        },
        "& a": {
            display: "block",
            marginTop: 16,
            color: theme.palette.primary.main,
            fontSize: 24,
            fontWeight: "bold",
        },
    },
    formWrap: {
        margin: 10,
        '& .MuiFormControl-root': {
            width: '70%',
            background: 'white',
        }
    },
    submitButton: {
        width: '40%',
        color: theme.palette.primary.main,
        background: theme.palette.text.main,
        marginTop: 30
    },
    inputsDiv: {
        background: theme.palette.primary.main,
        width: '50%',
        margin: 'auto',
        padding: 40,
        marginTop: 30,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },
    }
}));

export default function Contact() {
    const classes = useStyles();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    return (
        <>
            <NavBar/>
            <Container maxWidth="lg">
                <div className={classes.contact}>
                    <h1>Contact Us</h1>
                    <p>For business enquiries, please email us at</p>
                    <Link href="/">support@lokaaly.com</Link>
                    <div className={classes.inputsDiv}>
                        <div className={classes.formWrap}>
                            <TextField type="text" label="Name" variant="filled" value={name} onChange={(e) => {
                                setName(e.target.value)
                            }}/>
                        </div>
                        <div className={classes.formWrap}>
                            <TextField type="text" label="Email" variant="filled" value={email}
                                       onChange={(e) => {
                                           setEmail(e.target.value)
                                       }}/>
                        </div>
                        <div className={classes.formWrap}>
                            <TextField type="text" label="Phone" variant="filled" value={phone}
                                       onChange={(e) => {
                                           setPhone(e.target.value)
                                       }}/>
                        </div>
                        <div className={classes.formWrap}>
                            <TextField type="text" label="Message" variant="filled" value={message} multiline
                                       onChange={(e) => {
                                           setMessage(e.target.value)
                                       }}/>
                        </div>
                        <Button variant='contained' className={classes.submitButton}>Submit</Button>
                    </div>
                </div>
            </Container>
            <Footer1/>
        </>
    );
}
