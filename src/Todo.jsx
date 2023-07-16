import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const Todo=({item,key,removeItem,toggleItem})=>{
    const labelId = `checkbox-list-label-${key}`
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={()=>(removeItem(item.id))} aria-label="comments">
                    <DeleteIcon/>
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined}  dense>
                <ListItemIcon >
                    <Checkbox
                        edge="start"
                        checked={item.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={()=>(toggleItem(item.id))}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={item.task} />
            </ListItemButton>
        </ListItem>
    );
}
export default Todo