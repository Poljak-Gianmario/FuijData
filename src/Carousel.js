import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Visualization from './Visualization';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
export default function Carousel() {
    return (

        <div class="carousel carousel-center rounded-box">

            <Grid container spacing={2}>
            <Grid item xs={4}>
                <Item>
                    <div class="carousel-item max-width: 100%; max-height:100%"  >
                    <img src={require('./photos/prova.jpg')} alt="Pizza"/>
                    </div> 
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <div class="carousel-item max-width: 100%; max-height:100%">
                    <img src={require('./photos/prova2.jpg')} alt="Pizza"/>
                    </div> 
                </Item>
            </Grid>
            <Grid item xs={4}>
                <Item> <div class="carousel-item max-width: 100%; max-height:100%">
                <Visualization/>
                </div>
                </Item>
            </Grid>
            </Grid>
                
        </div>
    );
  }
