// import { Grid, Box, Typography } from "@mui/material";
// import React from "react";


// const App = () => {
//     return (
//         <Grid container sx={{justifyContent:"space-around","@media (min-width:900px) and (max-width:1199px)":{
//             justifyContent:"start"
//           },}}>
//             <Grid item xs={12} sm={12} md={4} lg={2}> 
//                 <Box sx={{ backgroundColor: 'blue', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <Typography variant="h3">
//                         1
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={2}>
//                 <Box sx={{ backgroundColor: 'green', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <Typography variant="h3">
//                         2
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={2}>
//                 <Box sx={{ backgroundColor: 'red', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <Typography variant="h3">
//                         3
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={2}>
//                 <Box sx={{ backgroundColor: 'pink', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <Typography variant="h3">
//                         4
//                     </Typography>
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={2}>
//                 <Box sx={{ backgroundColor: 'yellow', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <Typography variant="h3">
//                         5
//                     </Typography>
//                 </Box>
//             </Grid>
//         </Grid>
//     )
// }
// export default App


import { Grid, Box, Typography } from "@mui/material";
import React from "react";


const App = () => {
    return (
        <Grid container sx={{justifyContent:{lg:"space-around"},gap:{xs:"10px",md:"0px"}}}>
            <Grid item xs={12} sm={12} md={4} lg={2}> 
                <Box sx={{ backgroundColor: 'blue', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3">
                        1
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
                <Box sx={{ backgroundColor: 'green', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3">
                        2
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
                <Box sx={{ backgroundColor: 'red', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3">
                        3
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
                <Box sx={{ backgroundColor: 'pink', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3">
                        4
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
                <Box sx={{ backgroundColor: 'yellow', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3">
                        5
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
export default App