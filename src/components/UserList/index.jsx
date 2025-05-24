import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';
import { Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import models from "../../modelData/models";
import "./styles.css";


function UserList () {
    const users = models.userListModel();
    return (
      <div className='container'>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window. You might
          choose to use <a href="https://mui.com/components/lists/">Lists</a>{" "}
          and <a href="https://mui.com/components/dividers/">Dividers</a> to
          display your users like so:
        </Typography>
        <List component="nav">
        {users.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem button component={Link} to={`/users/${item._id}`}>
              <ListItemText primary={item.first_name} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
        <Typography variant="body1">
          The model comes in from models.userListModel()
        </Typography>
      </div>
    );
}

export default UserList;