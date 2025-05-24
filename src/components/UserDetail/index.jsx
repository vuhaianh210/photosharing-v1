import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import fetchModel from '../../lib/fetchModelData';
import { Typography, Paper, Button } from '@mui/material';
import models from "../../modelData/models";
import "./styles.css";


function UserDetail() {
  const { userId } = useParams();
  const [showUserPhotos, setShowUserPhotos] = useState(false);

  const handleViewUserPhotos = () => {
    setShowUserPhotos(true);
  };

  const userModel = models.userModel(userId);
  console.log(userModel)
  return (
    <div className='container'>
      <Typography variant="body1">
        <div>
          <div>First name : {userModel.first_name}</div>
          <div>Last name : {userModel.last_name}</div>
          <div>Location : {userModel.location}</div>
          <div>Desciption : {userModel.description}</div>
        </div>
      </Typography>
      <Link to={`/photos/${userId}`} onClick={handleViewUserPhotos}>
        View User Photos
      </Link>
    </div>
  );
}

export default UserDetail;