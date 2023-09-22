import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Tab.css';
import Button from './Components/Button';

export default function DynamicTabs() {
  const [value, setValue] = useState('1');
  const [numTabs, setNumTabs] = useState(3); // Default number of tabs
  const [activeTab, setActiveTab] = useState("1"); // Track the active tab
  const [activeItem, setActiveItem] = useState("Item 1"); // Track the active item label

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setActiveTab(newValue); // Set the active tab when it's clicked
    setActiveItem(`Item ${newValue}`);
  };

  const handleNumTabsChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    // Ensure that numTabs never goes below 1
    setNumTabs(Math.max(1, newValue));
  };

  // Create an array of tab data
  const tabData = Array.from({ length: numTabs }, (_, index) => ({
    label: `Item ${index + 1}`,
    id: `${index + 1}`,
  }));

  const handleButtonClick = (label, tabValue) => {
    // Update the active item label and tab value
    setActiveItem(label);
    setValue(tabValue);
    setActiveTab(tabValue);
  };

  return (
    <div>
      <div className='Numbers'>
        <TextField
          label="Number of Tabs"
          type="number"
          value={numTabs}
          onChange={handleNumTabsChange}
        />
      </div>
      <div className='box'>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
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
                  backgroundColor: activeTab === tab.id ? 'lightgrey' : 'inherit',
                  color: activeTab === tab.id ? 'black' : 'inherit',
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
        Selected Item: {activeItem}
      </div>
    </div>
  );
}
