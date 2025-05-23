import React from 'react';
import { Box, Grid, Typography, Button, Container, CardActionArea, CardActions, CardContent, Card, CardMedia } from "@mui/material";
import image from '../assest/images/tree.jpg';
import house from '../assest/images/house.jpg'
import lake from '../assest/images/lake.jpg'
import sunset from '../assest/images/sunset.jpg'



const Section = () => {
    // let imges = [house, lake, sunset]

    let allset=[
        {name:"House",
         tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum ipsam distinctio soluta necessitatibus officiis molestias optio vitae repellat amet sit.",
         image:house
        },
        {name:"River",
        tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum ipsam distinctio soluta necessitatibus officiis molestias optio vitae repellat amet sit.",
        image:lake
        },
        {name:"Tree_yellow",
        tittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum ipsam distinctio soluta necessitatibus officiis molestias optio vitae repellat amet sit",
        image:sunset
        }
    ]
    return (
        <>
            <Box
                sx={{
                    height: { xs: "135vh", sm: "120vh", md: "90vh", lg: "85vh", xl: "65vh" },
                    backgroundColor: "grey",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Container maxWidth={false} disableGutters sx={{ width: "83%", height: "90%", display: "flex", alignItems: "center" }}>

                    <Box sx={{ height: { xs: "autp", sm: "auto", md: "300px", lg: "auto" }, width: "100%", }}>
                        <Grid
                            container
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column-reverse", md: "row" }
                            }}
                        >
                            <Grid item xs={12} md={6} sx={{ height: { xs: "300px", sm: "300px", md: "300px" }, display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                                <Typography variant='h4' fontWeight="bold" fontSize={{ xs: "1.2rem", md: "1.1rem", lg: "1.4rem" }} sx={{ marginTop: "10px" }}>
                                    Lorem ipsum dolor, sit amet
                                </Typography>
                                <Typography variant='body1' maxWidth="90%" sx={{ marginTop: "10px", fontSize: { xs: "0.9rem", md: "0.9rem", lg: "1.2rem" } }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum ipsam distinctio soluta necessitatibus officiis molestias optio vitae repellat amet sit placeat dolor. Ipsum ipsam distinctio soluta necessitatibus officiis molestias optio vitae repellat amet sit placeat dolor.
                                </Typography>
                                <Typography variant='body2' maxWidth="90%" sx={{ marginTop: "10px", fontSize: { xs: "0.9rem", md: "0.9rem", lg: "1.2rem" } }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam distinctio necessitatibus officiis sit amet consectetur soluta necessitatibus officiis sit amet consectetur.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{ minWidth: "150px", alignSelf: { xs: "center", md: "start" }, marginTop: "15px", backgroundColor: "#ff3d00","&:hover": {
                                                      backgroundColor:"red", 
                                                      color: "white",              
                                                      cursor: "pointer"}}}
                                >
                                    Click Me
                                </Button>
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ height: "100%", display: "flex", justifyContent: { xs: "center", sm: "center", md: "start", lg: "end" }, alignItems: "center" }}>
                                <img
                                    src={image}
                                    alt="Beautiful tree in nature"
                                    style={{ maxWidth: "100%", borderRadius: "10px" }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{height: { xs: "auto", sm: "auto", md: "auto", lg: "120vh", xl: "70vh" },}}>
                <Container maxWidth={false} disableGutters sx={{ width: "83%"}}>
                    <Box sx={{ height: "120px", display: "flex", alignItems: "center" }}>
                        <Grid Container>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Typography variant="h4" fontWeight={"bold"}>
                                    This is a Heading
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Grid container>
                            {allset.map((item, index) => (
                                <Grid item key={index} xs={12} sm={index === 2 ? 12:6} md={index === 2 ? 12 : 6} lg={4} sx={{  display: "flex", 
                                    justifyContent:{ lg: index === 1 ? "center" : index === 2 ? "flex-end" : "flex-start",
                                        md: index === 2 ? "center" : index === 1 ? "flex-end" : "flex-start",
                                        sm:index===2 ? "center" :"flex-start",
                                        xs: "center"},marginTop:"15px"}} >
                                    <Card sx={{
                                        width: "100%",
                                        maxWidth: { xs: "90%", sm: "300px", md: "350px" },
                                        height: { xs: "auto", md: "400px" },
                                        backgroundColor:"none",boxShadow:"5px"
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img" 
                                                height="190"
                                                image={item.image}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                                    {item.tittle}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button
                                                variant="contained"
                                                sx={{ 
                                                    minWidth: "150px", 
                                                    backgroundColor: "#ff3d00", 
                                                    margin: "auto",
                                                    "&:hover": {
                                                      backgroundColor:"red", 
                                                      color: "white",              
                                                      cursor: "pointer"          
                                                    }
                                                  }}>
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Section;
