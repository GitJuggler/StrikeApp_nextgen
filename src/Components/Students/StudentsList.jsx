import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function StudentsList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [User, setUser] = useState(['']);

  useEffect(()=>{
    axios.get('http://localhost:3001/users').then(res=>setUser(res.data))
  },[])

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Ielts Group" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {User.length === 0  ? " " : User.map((item,index)=> (<Box key={index} sx={{width: '350px', height: '200px', borderRadius: '10px', border: '1px solid #000', padding: '20px'}}>
          {item.group === 'ielts' || item.group === 'admin' ? 
            <>
              <Typography variant="p">Name: {item.user_name}</Typography> <br />
              <Typography variant="p">Email: {item.email}</Typography> <br />
              <Typography variant="p">Stikes: {item.strikes}</Typography> <br />
              <Typography variant="p">Group: {item.group}</Typography> <br /> <br />
              {item.group === 'admin' ? <Button variant="outlined" sx={{color: 'red', border: '1px solid red'}}>Strike</Button> : ""}
            </>
          :
           ' '}
        </Box>))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
