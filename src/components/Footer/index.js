import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Footer from '@material-ui/core/BottomNavigation';
import {Link} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    footer: {
        background: '#515151',
        marginTop: "5px",
        padding: '65px 0 56px',
        height: 'auto',
        [theme.breakpoints.down("sm")]: {
            '& *': {
                textAlign: 'center !important',
            },
            '& li': {
                '& a': {
                    display: 'block !important'
                }
            }

        },
        '& *': {
            textAlign: 'left',
            color: '#fff',
        },
        '& h2': {
            fontSize: 16,
            textTransform: 'uppercase',
        },
        '& li': {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textAlign: 'left',
            listStyle: 'none',
            marginBottom: 16,

            '& a': {
                fontSize: 14,
                display: 'flex',
                alignItems: 'center'
            },
            '& svg': {
                marginRight: 8,
            }
        }
    },
    followIcons: {
        display: 'inline-flex',
        '& li': {
            margin: 7
        }
    },
    responsiveGrid: {
        [theme.breakpoints.down("sm")]:
            {
                flexDirection: "column",
            },
    },
    link: {
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
    appImages: {
        width: 200,
        height: 60,
    }
}));

export default function Footer1() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Footer className={classes.footer}>
                <Container maxWidth="lg">
                    <div className={classes.footerWrap}>
                        <Grid container spacing={2} className={classes.responsiveGrid}>
                            <Grid item sm={3} xs={12}>
                                <div className={classes.logoDiv}>
                                    <Link href="/">
                                        <img src="/img/NavBarIcon.svg" alt="nav"/>
                                    </Link>
                                </div>
                                <ul className={classes.followIcons}>
                                    <li><Link href="https://www.instagram.com/lokaaly.ae/"><InstagramIcon/></Link></li>
                                    <li><Link href="https://www.facebook.com/lokaaly.ae"><FacebookIcon/></Link></li>
                                    <li><Link href="/"><TwitterIcon/></Link></li>
                                </ul>
                            </Grid>
                            <Grid item sm={3} xs={12}>
                                <ul>
                                    <li><Link href="/about_us">About us</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li><Link href="/terms">Terms and Conditions</Link></li>
                                    <li><Link href="/#category_id">Food Category</Link></li>
                                </ul>
                            </Grid>
                            <Grid item sm={3} xs={12}>
                                <ul>
                                    <li><Link href="/vendor/register">Add your business</Link></li>
                                    <li><Link href="/privacy">Privacy</Link></li>
                                    <li><Link href="/">Advertise with us</Link></li>
                                </ul>
                            </Grid>
                            <Grid item sm={3} xs={12}>
                                <img src='/img/androindDownload.png' alt='android' className={classes.appImages}/>
                                <img src='/img/iosDownload.png' alt='ios' className={classes.appImages}/>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </Footer>
        </div>
    );
}
