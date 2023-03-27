import React, { useState } from "react";
import { useSelector} from "react-redux";
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import ToDoDialog from '../../Components/ToDoDialog';
import Paper from '@mui/material/Paper';
import "../../styles/toDo.css";
import moment from 'moment'

const ToDo = (props) => {
  let toDoList = useSelector((state) => state.toDos.toDos);
  const columnsList = [
    {
      name: 'Id',
      selector: row => row.id,
      maxWidth: "10%",
    },
    {
      name: 'Date',
      sortable: true,
      selector: row => moment(row.date).format('YYYY-MM-DD'),
      maxWidth: "20%",
    },
    {
        name: 'Title',
        sortable: true,
        selector: row => row.title,
        maxWidth: "35%",
    },
    {
      name: 'Slug',
      selector: row => row.slug,
      maxWidth: "35%",
    },
  ]
  const [columns, setColumns] = useState(columnsList);
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState("");

  const handleModal = (status, element) => {
    setElement(element);
    setOpen(status);
  }
  
  return (
    <div className="mainDiv">
      <Header />
      <div className="to-do-header"><h2>Your Calendar Here !</h2></div>
      <Paper className="table-div">
        <Table data={toDoList} columns={columns} handleModal={handleModal}/>
      </Paper>
      <ToDoDialog open={open} handleModal={handleModal} element={element}/>
    </div>
  );
};
  
export default ToDo;
  