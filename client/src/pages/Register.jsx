import { useState } from "react";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
 
  const navigate = useNavigate();
  const {storetokenInLS}=useAuth();
  //---------Handling the Input Values-------------
  const handelInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //------------------------------------------------

  //------------------Post data registration form------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log("res from serve", res_data);
        // localStorage.setItem("token", res_data.token);
        storetokenInLS(res_data.token)
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
        Swal.fire({
          title: "Good job!",
          text: "Sing up Successfully",
          icon: "success"
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  //---------------------------------------------------------------

  return (
    <>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            // marginBottom:18,
            // width:"40px",
            // height:"40px"
            // boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            // boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          }}
        >
          <Grid container>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(/images/sign-rifiki.png)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[40]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={2}
              square
            >
              <Box
                sx={{
                  my: 4,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h3"
                  style={{ color: "orange" }}
                >
                  Sign Up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 0 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    value={user.username}
                    name="username"
                    autoComplete="username"
                    onChange={handelInput}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={user.email}
                    autoComplete="email"
                    onChange={handelInput}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone"
                    name="phone"
                    value={user.phone}
                    autoComplete="phone"
                    onChange={handelInput}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={handelInput}
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    id="btncolor"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1, backgroundColor: "#e67e22" }}
                  >
                    Register
                  </Button>
                  <Grid container>
                    <Grid item>
                      <br />{" "}
                      <NavLink
                        to="/login"
                        variant="body2"
                        style={{ textDecoration: "none" }}
                      >
                        {"If you have already account? Login here"}
                      </NavLink>
                      <br />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
