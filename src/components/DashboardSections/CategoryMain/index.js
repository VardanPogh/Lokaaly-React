import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CategoryCard from "../CategoryCard";
import Grid from "@material-ui/core/Grid";
import {API_URL} from "../../../config";

const useStyles = makeStyles((theme) => ({
    card: {
        width: "200px",
        height: "222px",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            width: "140px",
            height: "168px",
        },
        margin: "20px",
    },
    categoryP: {
        textAlign: "center",
        color: theme.palette.primary.main,
        fontSize: "32px",
        font: "normal normal bold 32px/43px Nunito",
        marginTop: "100px",
        marginBottom: "56px",

        textTransform: "uppercase",
    },
}));

export default function CategoryMain() {
    const classes = useStyles();

    const [categories, setCategories] = useState();

    useEffect(() => {
        let token = localStorage.getItem("token");

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
        };

        fetch(API_URL + "static/categories", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                if (response.status == 200) {
                    console.log('data ', data);
                    const tempData = data.map((item) => {
                        return (
                            <Grid item xs={6} sm={2} className={classes.root} align="center">
                                <CategoryCard className={classes.root}
                                              image={item.image}
                                              title={item.name}
                                />
                            </Grid>
                        )
                    });
                    setCategories(tempData);
                } else {
                    console.log('error ', data)
                }
            })
    }, []);

    return (
        <Container maxWidth="lg">
            <p className={classes.categoryP} id={'category_id'}>All categories</p>
            <Grid container alignItems="center">
                {categories}
            </Grid>
        </Container>
    );
}
