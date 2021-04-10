import React, { useState } from 'react'
// import Container from '@material-ui/core/Container';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Paper from '@material-ui/core/Paper';
// import RoomIcon from '@material-ui/icons/Room';
// import ListIcon from '@material-ui/icons/List';
import './LeftMenu.scss'
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const LeftMenu = () => {
  // const [isItalian, setItalian] = useState(false)
  // const [isJapanese, setJapanese] = useState(false)
  // const [isLebanese, setLebanese] = useState(false)
  // const [activeCuisines, setActiveCuisines] = useState([])
  const [activeCuisines, setActiveCuisines] = useState({
    isItalian: true,
    isJapanese: true,
    isLebanese: true,
  });

  // const handleCuisine = event => {
  //   // event.target.innerText
  //   setActiveCuisines(event.target.innerText)
  //   console.log(activeCuisines)
  //   console.log(event.target.innerText)
  // }
  const handleChange = (event) => {
    setActiveCuisines({ ...activeCuisines, [event.target.name]: event.target.checked });
  };

  return (
    <div className='left-menu'>
      <header>Choose your cuisine</header>
        <div className='left-menu--filters'>
          {/* <Paper> */}
            <FormControlLabel
              className={activeCuisines.isItalian ? 'left-menu--item active' : 'left-menu--item'}
              control={
                <Checkbox 
                  color="primary"
                  checked={activeCuisines.isItalian} 
                  onChange={handleChange} 
                  name="isItalian" 
                />
              }
              label="Italian"
            />
            <Divider />
            <FormControlLabel
              className={activeCuisines.isJapanese ? 'left-menu--item active' : 'left-menu--item'}
              control={
                <Checkbox 
                  color="primary"
                  checked={activeCuisines.isJapanese} 
                  onChange={handleChange} 
                  name="isJapanese" 
                />
              }
              label="Japanese" 
            />
            <Divider />
            <FormControlLabel
              className={activeCuisines.isLebanese ? 'left-menu--item active' : 'left-menu--item'}
              control={
                <Checkbox 
                  color="primary"
                  checked={activeCuisines.isLebanese} 
                  onChange={handleChange} 
                  name="isLebanese" 
                />
              }
              label="Lebanese"
            />
          {/* </Paper> */}
        </div>
          
        {/* <Button className={isJapanese ? 'active' : ''}>Japanese</Button>
        <Button className={isLebanese ? 'active' : ''}>Lebanese</Button> */}
    </div>
  );
}

export default LeftMenu;
