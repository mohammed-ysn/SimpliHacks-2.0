import React from "react"
import {AppBar,Card,CardActions,CardActionArea,CardContent,CssBaseline,Grid ,Typography, Toolbar,Button} from "@material-ui/core";
import CountUp from 'react-countup';
import Cardmedia from "@material-ui/core/CardMedia";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from "../../images/LogoSerene.jpg";
import Oceana from "../../images/Oceana.jpg";
import OceanCon from "../../images/OceanCon.jpg";
import ProjectAware from "../../images/ProjectAware.jpg";

function Artic(){
    return(

        <>
        <CssBaseline/>
        <AppBar position="relative">
            <Toolbar>
                <ArrowBackIosIcon onClick={() => window.open("http://localhost:3000","_self")}/>

                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <img src={Logo} alt="logo" style={{width:"75px"}}/>
                </Grid>
                </Toolbar>
        </AppBar>
        
        <Typography variant="h4" style={{marginTop:"15px",textAlign:"center"}}>
            Artic Ocean
        </Typography>
            
        <div>
            <Grid container justifyContent="center" spacing={3} style={{marginTop:"15px"}}>
                    
                    <Grid item xs={12} md={6} lg={2} >
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom style={{fontWeight: 600,fontSize: 20 }}>
                                Average Carbon
                            </Typography>
                            <p style={{fontWeight: 400,fontSize: 16 }}><CountUp start={0} end={350} duration={2}/>  ppm by volume</p>
                        </CardContent>
                    </Card>
                </Grid>
                    
                <Grid item xs={12} md={6} lg={2}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom style={{fontWeight: 600,fontSize: 20 }}>
                                Amount of Plastic
                            </Typography>
                            <p style={{fontWeight: 400,fontSize: 16 }}><CountUp start={0} end={300} duration={2} separator=","/> billion</p>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} md={6} lg={2}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom style={{fontWeight: 600,fontSize: 20 }}>
                            How many Animals:
                            </Typography>
                            <p style={{fontWeight: 400,fontSize: 16 }}><CountUp start={0} end={5000} duration={2} separator=","/> Known Species</p>
                        </CardContent>
                    </Card>
                </Grid>  
            </Grid>
        </div>
        
        <Typography variant="h4" style={{marginTop:"60px",marginLeft:"40px"}}>
            Want To Help?
        </Typography>
        <Typography variant="h6" style={{marginLeft:"40px"}}>
            Organization that Helps the Enviornment and Ocean
        </Typography>

        <div>
            <Grid container spacing={3} style={{marginTop:"15px",marginLeft:"40px"}} > 
                    <Grid item xs={12} md={6} lg={3} >
                        <Card sx={{ minWidth: 275 } } >
                            <CardActionArea>
                                <Cardmedia image={Oceana} style={{height:"140px"}}/>
                            </CardActionArea>
                            
                            <CardContent>
                                <Typography color="text.secondary" gutterBottom style={{fontWeight: 600,fontSize: 20 }}>
                                    Oceana
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                A nonprofit ocean conservation organization focused on influencing specific policy decisions on the national 
                                level to preserve and restore the world's oceans.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="medium" color="primary" target="_blank" href="https://oceana.org/" style={{marginRight:"100px"}}>
                                    Visit Site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={3} >
                        <Card sx={{ minWidth: 275 } } >
                            <CardActionArea>
                                <Cardmedia image={OceanCon} style={{height:"140px"}}/>
                            </CardActionArea>
                            
                            <CardContent>
                                <Typography color="text.secondary" gutterBottom style={{fontWeight: 600,fontSize: 20 }}>
                                    Ocean Conservancy
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                A nonprofit environmental advocacy group based in Washington, D.C., United States. The organization helps formulate ocean policy 
                                at the federal and state government levels based on peer reviewed science.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="medium" color="primary" target="_blank" href="https://oceanconservancy.org/" style={{marginRight:"100px"}}>
                                    Visit Site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3} >
                        <Card sx={{ minWidth: 275 } } >
                            <CardActionArea>
                                <Cardmedia image={ProjectAware} style={{height:"140px"}}/>
                            </CardActionArea>
                            
                            <CardContent>
                                <Typography color="text.secondary" gutterBottom style={{fontWeight: 600,fontSize: 20 }}>
                                    Project Aware
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                A nonprofit organization working with volunteer scuba divers to protect the oceans. 
                                Project Aware has offices in UK, US, and Australia supporting divers acting in their own communities.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="medium" color="primary" target="_blank" href="https://www.padi.com/aware" style={{marginRight:"100px"}} >
                                    Visit Site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Artic