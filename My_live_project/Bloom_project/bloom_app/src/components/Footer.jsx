import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaFacebook, FaTwitter, FaRss, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
    let last_card = [
        {
            month: "JULY",
            date: 27,
            first: "Ipsum ipsam distinctio sit",
            secound: "Lorem ipsum dolor sit amet sit"
        },
        {
            month: "JULY",
            date: 27,
            first: "Ipsum ipsam distinctio sit",
            secound: "Lorem ipsum dolor sit amet sit"
        },
        {
            month: "JULY",
            date: 27,
            first: "Ipsum ipsam distinctio sit",
            secound: "Lorem ipsum dolor sit amet sit"
        },
    ]

    const iconStyle = {
        width: "2.5rem",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "5px",
    };

    return (
        <Box sx={{ backgroundColor: "#4B4B4B", py: "4rem", mt: "2rem" }}>
            <Container maxWidth={false} disableGutters sx={{ width: "88%", p: "3rem" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <Typography variant='h5' fontSize={"1.5rem"} color='white'>
                                Latest Posts
                            </Typography>
                            {last_card.map((item, index) => (
                                <Grid container key={index} spacing={5}>
                                    <Grid item xs={3} sm={2} md={2}>
                                        <Box sx={{
                                            width: "50px",
                                            height: "50px",
                                            backgroundColor: "white",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "5px"
                                        }}>
                                            <Typography variant='body2' fontSize={"0.9rem"}>
                                                {item.month}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={"bold"} fontSize={"1.1rem"}>
                                                {item.date}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9} sm={10} md={10} sx={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                        <Typography variant='body1' fontSize={"1rem"} sx={{fontWeight:"bold",color:"white"}}>
                                            {item.first}
                                        </Typography>
                                        <Typography variant='body1' fontSize={"1rem"} sx={{color:"#bfbfbf"}}>
                                            {item.secound}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={6}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <Typography variant='h5' fontSize={{lg:"1.5rem"}} color='white'>
                                About
                            </Typography>
                            <Typography variant='body1' fontSize={{xs:"0.8rem",sm:"0.8rem",md:"0.8rem",lg:"1.1rem"}} sx={{color:"white"}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, deserunt sed ad obcaecati dolore incidunt. Eos minima natus a facilis corporis perferendis odio assumenda                                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, deserunt sed ad obcaecati dolore incidunt. Eos minima natus a facilis corporis perferendis odio assumenda!

                            </Typography>
                            <Typography variant='body1' fontSize={{xs:"0.8rem",sm:"0.8rem",md:"0.8rem",lg:"1.1rem"}} sx={{color:"white"}}>
                                Asperiores corporis perferendis odio assumenda Asperiores corporis perferendis odio assumenda.Asperiores corporis perferendis.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={3}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <Typography variant="h5" fontSize={"1.5rem"} color="white">
                                Stay Connected
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={4} sm={1} md={1} lg={2}>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                                        <Box sx={{ ...iconStyle, backgroundColor: "#1877F2" }}>
                                            <FaFacebook size={24} />
                                        </Box>
                                        <Box sx={{ ...iconStyle, backgroundColor: "#1DA1F2" }}>
                                            <FaTwitter size={24} />
                                        </Box>
                                        <Box sx={{ ...iconStyle, backgroundColor: "#FFA500" }}>
                                            <FaRss size={24} />
                                        </Box>
                                        <Box sx={{ ...iconStyle, backgroundColor: "#DB4437" }}>
                                            <FaGooglePlusG size={24} />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={8} sm={11} md={11} lg={10} sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                    <Box sx={{ display: "flex", flexDirection: "column",height:"180px" ,justifyContent:"space-between"}}>
                                        <Typography variant="body1" fontSize={"1rem"} sx={{color:"white"}}>Facebook</Typography>
                                        <Typography variant="body1" fontSize={"1rem"} sx={{color:"white"}}>Twitter</Typography>
                                        <Typography variant="body1" fontSize={"1rem"} sx={{color:"white"}}>RSS</Typography>
                                        <Typography variant="body1" fontSize={"1rem"} sx={{color:"white"}}>Google+</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;