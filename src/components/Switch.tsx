import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels({value, changeHandler, label}:{value:Boolean, changeHandler: () => void, label:string}) {
  return (
    <FormGroup>
      <FormControlLabel 
        control={
            <Switch value={value} onChange={changeHandler} />
        } 
        label={label} 
      />
    </FormGroup>
  );
}