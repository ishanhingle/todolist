import { useState } from "react";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const initialList = [
    { id: 1, task: "study", completed: true },
    { id: 2, task: "sleep", completed: true },
    { id: 3, task: "eat", completed: true }
]
const Todolist = () => {
    const [list, setList] = useState(initialList);
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {list.map((item) => {
                    const labelId = `checkbox-list-label-${item.id}`;

                    return (
                        <ListItem
                            key={item.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined}  dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={item.completed}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item.task} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    )
}
export default Todolist;