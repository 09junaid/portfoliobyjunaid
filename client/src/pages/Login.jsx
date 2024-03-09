import { useState } from "react"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import Swal from 'sweetalert2'
export const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const {storetokenInLS}=useAuth();
    const handelInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(user);
      try {
        const response=await fetch(`http://localhost:5000/login`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(user)
        });
        if(response.ok){
          const res_data=await response.json();
          console.log("res from server",res_data);
          storetokenInLS(res_data.token);
          // localStorage.setItem("token",res_data.token);
          setUser({
            email:"",
            password:""
          })
          navigate("/")
          Swal.fire({
            title: "Good job!",
            text: "Login Successfully",
            icon: "success"
          });

        }
        console.log(response)
      } catch (error) {
        console.log("login",error)
      }
        // setUser({
        //     email:"",
        //     password:""
        // })
    }
   return(
        <>
   <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 14,
          // boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"

        }}>
        <Grid container>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:"url(/images/Login-rafiki.png)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>t.palette.mode === "light"? t.palette.grey[40]: t.palette.grey[900],
              backgroundSize:"cover",
              // backgroundPosition: "center",
            }}/>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={1}
            square>
            <Box
              sx={{
                my: 5,
                mx: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <Typography component="h1" variant="h3" style={{color:"orange"}}>
                Login Here
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handelInput}
                  autoFocus/>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handelInput}
                  autoComplete="current-password"/>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"/>
                <Button
                  id="btncolor"
                  type="submit"
                  fullWidth
                  // variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor:"#e67e22",color:"white" }}>
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <NavLink to="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </NavLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
        </>
    )
}