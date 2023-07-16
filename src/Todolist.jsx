import { useState } from "react";
import * as React from 'react';
import Todo from "./Todo"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {v4 as uuid} from 'uuid';
import Form from "./form";

const initialList = [
    { id: 1, task: "study", completed: true },
    { id: 2, task: "sleep", completed: true },
    { id: 3, task: "eat", completed: true }
]
const Todolist = () => {
    const [list, setList] = useState(initialList);
    const removeItem = (id) => {
        setList((prev) => (prev.filter((item) => (item.id != id))))
    }
    const toggleItem=(id)=>{
        setList((prev)=>(prev.map((item)=>{
            if(item.id==id){
                item.completed=!item.completed;
            }
            return item;
        })))
    }
    const addItem=(s)=>{
       setList(prev=>([...prev,{id:uuid(),task:s,completed:true}]))
    }
    return (
        <div >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',textAlign:"center" }}>
                {list.map((item) => (<Todo item={item} key={item.id} removeItem={removeItem} toggleItem={toggleItem}/>))}
            </List>
            <Form addItem={addItem}/>
        </div>
    )
}
export default Todolist;