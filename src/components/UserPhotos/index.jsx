import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';
import { Typography, Paper, Box } from '@mui/material';
import "./styles.css";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();
  const userPhotos = models.photoOfUserModel(userId);
  console.log(userPhotos);

  return (
    <div className='container'>
      <Typography variant="body1">
        User Photos for User ID: {userId}
      </Typography>
      <div>
        {userPhotos.map((photo) => (
          <img
            key={photo._id}
            src={require(`../../images/${photo.file_name}`)}
            alt={`Photo by ${photo.user_id}`}
            style={{ width: "200px", height: "auto", margin: "5px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default UserPhotos;
