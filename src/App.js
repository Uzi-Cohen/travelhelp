import React from "react";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
 import { CssBaseline, Grid } from "@material-ui/core";
 




const App = () => {
    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4}></Grid>
<List />
        </Grid>
        <Grid item xs={12} md={8}>
            <Map />
        </Grid>



        </>
    );
}
export default App;