import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Grid
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import _ from 'lodash'

interface Props {
    children: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            display: 'flex',
            width: '100%',
            height: '100vh',
        }
    })
);


const AdminPage = (props:Props) :React.ReactElement<Props>  =>  {
    const classes = useStyles()
    const history = useHistory();

    return(
        <Grid container direction={'row'} >
            {'admin'}
        </Grid>
    )
}


export default AdminPage