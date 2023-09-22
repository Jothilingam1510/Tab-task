import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Tab.css';
import Button from './Components/Button';

export default function DynamicTabs() {
  const [state, setState] = useState({
    value: '1',
    numTabs: 3,// Default number of tabs
    activeTab: '1',// Track the active tab
    activeItem: 'Item 1',// Track the active item label
  });

  const handleChange = (event, newValue) => {
    setState({
      ...state,
      value: newValue,
      activeTab: newValue,
      activeItem: `Item ${newValue}`,
    });
  };

  const handleNumTabsChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    // Ensure that numTabs never goes below 1
    setState({
      ...state,
      numTabs: Math.max(1, newValue),
    });
  };

  // Create an array of tab data
  const tabData = Array.from({ length: state.numTabs }, (_, index) => ({
    label: `Item ${index + 1}`,
    id: `${index + 1}`,
  }));

  const handleButtonClick = (label, tabValue) => {
    // Update the active item label and tab value
    setState({
      ...state,
      activeItem: label,
      value: tabValue,
      activeTab: tabValue,
    });
  };

  return (
    <div>
      <div className='Numbers'>
        <TextField
          label="Number of Tabs"
          type="number"
          value={state.numTabs}
          onChange={handleNumTabsChange}
        />
      </div>
      <div className='box'>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={state.value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="dynamic tabs example"
            sx={{ '& .MuiTabs-indicator': { backgroundColor: 'black' } }} // Remove underline
          >
            {tabData.map((tab, index) => (
              <Tab
                className='tab'
                key={tab.id}
                value={tab.id}
                label={tab.label}
                style={{
                  backgroundColor: state.activeTab === tab.id ? 'lightgrey' : 'inherit',
                  color: state.activeTab === tab.id ? 'black' : 'inherit',
                }}
              />
            ))}
          </Tabs>
          {tabData.map((tab) => (
            <Button
              key={tab.id}
              label={tab.label}
              tabValue={tab.id}
              setActiveItem={handleButtonClick}
            />
          ))}
        </Box>
      </div>
      <div className="active-item">
        Selected Item: {state.activeItem}
      </div>
    </div>
  );
}
