import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "About Us", "Services", "Portfolio", "Contact Us"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);

    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "black", height: "90px",}}>
            <Box sx={{m:"auto",width:"98%"}}>
                <Toolbar sx={{ maxWidth: "1600px", width: "85%", margin: "0 auto",}}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}>
                        Bloom
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation menu"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: "10px" }}>
                        {pages.map((page) => (
                            <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block","&:hover":{color:"blue"}}}>
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default ResponsiveAppBar;
