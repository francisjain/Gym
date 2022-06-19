import React, { useEffect, useState } from 'react'

import Homeslider from './Homeslider'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Divider, Grid, IconButton, InputBase, Link, Paper } from '@mui/material'
import { listGym } from '../actions/gymAction'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';


import "./Home.css"






function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Fitness For You
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



function Home() {

  const [search, setSearch] = useState("")
  console.log(search);
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) { handleShow(true) }
      else { handleShow(false) }
    });
    return () => { window.removeEventListener("scroll", null) }
  }, [])



  const dispatch = useDispatch();
  const gymData = useSelector(state => state.gymReducer)
  const { gym } = gymData

  useEffect(() => {
    dispatch(listGym())
  }, []);

  console.log(gym);



  // const footers = [
  //   {
  //     title: 'Company',
  //     description: ['Team', 'History', 'Contact us', 'Locations'],
  //   },
  //   {
  //     title: 'Features',
  //     description: [
  //       'Cool stuff',
  //       'Random feature',
  //       'Team feature',
  //       'Developer stuff',
  //       'Another one',
  //     ],
  //   },
  //   {
  //     title: 'Resources',
  //     description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  //   },
  //   {
  //     title: 'Legal',
  //     description: ['Privacy policy', 'Terms of use'],
  //   },
  // ];
  return (
    <div>


      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="nav_log"
          src="./images/logo.png"
          alt="Gym Logo" />

        <div>
          <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 350, float: 'right', mr: '50px', mb: '2px' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Gym"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={() => { if(search != (gym.filter(item => {item.name.toLowerCase().includes(search.toLowerCase())}))) {alert("Not found")} }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>


      <div className="gymlanding">
        <Homeslider />
        <div style={{ position: 'absolute', top: "150px", marginLeft: "100px" }}>
          <Paper
          // sx={{
          //   position: 'relative',
          //   backgroundColor: 'grey.800',
          //   color: '#fff',
          //   mb: 4,
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundPosition: 'center',
          //   backgroundImage: `url(./images/image4.jpg)`,
          // }}
              style={{backgroundColor: 'rgba(100,100,100,.3)',color:"white"}}
          >
            {/* Increase the priority of the hero background image */}

            <Box
              // sx={{
              //   position: 'absolute',
              //   top: 0,
              //   bottom: 0,
              //   right: 0,
              //   left: 0,
              //   backgroundColor: 'rgba(0,0,0,.3)',
              // }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Your Trusted Fitness Studio In Town
                  </Typography>
                  {/* <Typography variant="h5" color="inherit" paragraph>
              Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. 
              </Typography> */}
                  <Link href='/signin'><Button variant="contained"> Sign In </Button></Link> <Link href='/signup'><Button variant="contained"> Sign Up </Button></Link>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <Container maxWidth="md" component="main" className="gymcenter" >
          <Grid container spacing={5} alignItems="flex-end">
            {
            gym ? (gym.filter(item => {

              if (search == "") { return item }
              else if (item.name.toLowerCase().includes(search.toLowerCase())) { return item }
              
            })).map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.name}
                xs={12}
                sm={tier.name === 'Enterprise' ? 12 : 6}
                md={4}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={tier.photograph}
                      alt={tier.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {tier.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Neighborhood : <b>{tier.neighborhood}</b> <br/>
                        Address : <b>{tier.address}</b>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Join
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )) : ("error")

            }
          </Grid>
        </Container>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          {/* <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="text.secondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid> */}
          <Copyright sx={{ mt: 5 }} />
        </Container>

      </div>{/* End footer */}
      {/* <Aside/> */}
      {/* <Footer/> */}

    </div>
  )
}

export default Home