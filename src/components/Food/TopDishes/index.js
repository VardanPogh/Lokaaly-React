import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import OrderCard from "../../DashboardSections/OrderCard";

const useStyles = makeStyles((theme) => ({
  orderP: {
    textAlign: "left",
    color: theme.palette.primary.main,
    fontSize: "32px",
    font: "normal normal bold 32px/43px Nunito",
    marginTop: "100px",
    marginBottom: "56px", 
    textTransform: "uppercase",
  },
  responsiveGrid: {
    [theme.breakpoints.up("sm")]: {
      justifyContent:"space-between!important",
    }
  },
  marginB: {
    marginBottom: "120px"
  }
}));

export default function TopDishes() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className = {classes.marginB}>
      <p className={classes.orderP}>TOP DISHES</p>
      
      <Grid container  justify="center" alignItems="center" className = {classes.responsiveGrid} spacing={2}>
        <Grid item xs={8} sm={3}>
          <OrderCard />
        </Grid>
        <Grid item xs={8} sm={3}>                   
          <OrderCard />
        </Grid>
        <Grid item xs={8} sm={3}>
          <OrderCard />
        </Grid>
        <Grid item xs={8} sm={3}>
          <OrderCard />
        </Grid>
      </Grid>
    </Container>
  );
}
