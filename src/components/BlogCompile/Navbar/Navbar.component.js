import React from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Box, Tabs, Tab, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: '1rem',
    //backgroundColor: "#193469"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="zero" label="X" {...a11yProps('zero')} />
          <Tab
            value="one"
            label="Politics"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Mental Health" {...a11yProps('two')} />
          <Tab value="three" label="Constructed Languages" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="zero">
      </TabPanel>
      <TabPanel value={value} index="one">
        <Link to="/blog/6029ac743b62d107e0450580" className={classes.link}><Button>The Social Contract</Button></Link>
        <Link to="/blog/6029daf83b62d107e0450581" className={classes.link}><Button >Accountability and Representation</Button></Link>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Link to="/blog/6029e8223b62d107e0450582" className={classes.link}><Button>Escaping Suicide</Button></Link>
      </TabPanel>
      <TabPanel value={value} index="three">
        <Link to="/blog/conlang" className={classes.link}><Button>Tukrøn Basics</Button></Link>
      </TabPanel>
    </div>
  );
}