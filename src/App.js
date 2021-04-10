import React, { useState } from 'react'
import './App.scss';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Paper from '@material-ui/core/Paper';
import RoomIcon from '@material-ui/icons/Room';
import ListIcon from '@material-ui/icons/List';
import LeftMenu from './LeftMenu'

const App = () => {
  const [mode, setMode] = useState(0);

  const handleChange = (event, newValue) => {
    setMode(newValue);
  };

  return (
    <div className='app'>
      <Container 
        className='header'
        disableGutters 
        maxWidth={false}>
        Find restaurants near you
      </Container>
      <div className='main'>
        <LeftMenu />
        <div className='main-view'>
          <div className='main-view-toggle'>
            {/* <span>Toggle view:</span> */}
            <Tabs
              className='tabs'
              orientation='horizontal'
              value={mode}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="icon label tabs example">
              <Tab icon={<ListIcon />} label="List" />
              <Tab icon={<RoomIcon />} label="Map" />
            </Tabs>
          </div>
          <div>
            {mode === 0 && <div>List</div>}
            {mode === 1 && <div>Map</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
