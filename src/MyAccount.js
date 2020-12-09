import React from 'react'
import Cardjs from './Cardjs'
import Grid from '@material-ui/core/Grid';

function MyAccount({items , loading}) {
    return (
        <div>
            <Grid container justify="center" justify={"space-evenly"}>
                {items.map(item => (
                    <Grid item  justify="center" >
                        <Cardjs item={item} isLoading={loading}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default MyAccount
