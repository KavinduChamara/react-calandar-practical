import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import { useDispatch} from "react-redux";
import { fetchItems } from '../../features/toDoSlice';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Table = (props) => {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date();
  const rest = month.slice(d.getMonth());
  const [activeMonths, setActiveMonths] = useState(rest);
  const [selectedMonth, setSelectedMonth] = useState("");

  const dispatch = useDispatch();
  const handleRowClicked = (el) => {
    props.handleModal(true, el);
  }
  const handleChange = (e) => {
    setSelectedMonth(e.target.value);
    dispatch(fetchItems(month.indexOf(e.target.value)+1));
  }

  return (
    <div>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl className="month-selection">
            <InputLabel id="demo-simple-select-standard-label">Month</InputLabel>
            <Select
              labelId="demo-simple-select-standard"
              id="demo-simple-select"
              value={selectedMonth}
              label="Month"
              onChange={handleChange}
            >
              {activeMonths.map(month =>
                <MenuItem value={month}>{month}</MenuItem>
              )};
            </Select>
          </FormControl>
        </Box>
      </div>
      <DataTable
        columns={props.columns}
        data={props.data}
        pagination
        onRowClicked={handleRowClicked}
      />
    </div>
  );
};
  
export default Table;
  