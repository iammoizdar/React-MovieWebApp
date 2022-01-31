import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Trending from '../Pages/Trending';
import Popular from '../Pages/Popular';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#313840',
    color: '#fff',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const routes =['/Trending', '/Popular']

  return (

    <BrowserRouter>
    <Route path="/">
  <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <Tab 
        value={routes[0]}
        component={Link}
        to={routes[0]}
        label="Trending" />
        <Tab 
         value={routes[1]}
        component={Link}
        to={routes[1]}
        label="Popular" />
        <Tab label="All Time" />
      </Tabs>
    </Paper>
    </Route>
    <Switch>
          <Route path="/trending" component={Trending} />
          <Route path="/popular" component={Popular} />
        </Switch>
    </BrowserRouter>
  
  );
}
