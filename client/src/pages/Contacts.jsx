import "./contact.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { useAuth } from "../store/auth";
export const Contacts = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        message: ""
    });
   
    // const [userData,setUserData]=useState(true);
    // const {users}=useAuth();
    // if(userData && users){
    //     setUser({
    //         username:users.username,
    //         email:users.email,
    //         message:"",
    //     });
    //     setUserData(false)
    // }
    
    const navigate = useNavigate();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const submitdata = async (e) => {
        e.preventDefault();
        console.log(user)
        try {
            const response = await fetch(`http://localhost:5000/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                setUser({
                    username: "",
                    email: "",
                    message: ""
                })
                // alert("message send successfully")
                navigate("/")
                Swal.fire({
                    title: "Good job!",
                    text: "Message sent Successfully",
                    icon: "success"
                  });
            }

            console.log(response)

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
        <Box
            sx={{
                mt: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "auto",
                // boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                // background: "#cc6600",
                // color:"white"
            }}>
            <Box sx={{ width: '50%', mx: "auto", p: 2 }}>
                <Typography variant="h3" align="center" mb={0} color="orange">
                    Contact Us
                </Typography>
                {/* sx={{ width: "100%", justifyContent: "center" }} */}
                <form onSubmit={submitdata}>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        name='username'
                        value={user.username}
                        onChange={handleInput}
                        required />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        value={user.email}
                        onChange={handleInput}
                        required
                        name='email'
                        type="email" />
                    <TextField
                        fullWidth
                        label="Message"
                        margin="normal"
                        name='message'
                        value={user.message}
                        onChange={handleInput}
                        required
                        multiline
                        rows={4} />
                    <Button id="btncolor" variant="error" type='submit' endIcon={<SendIcon />} sx={{ mt: 2, backgroundColor: "orange", color: "white" }}>
                        Submit
                    </Button>
                </form><br />
                <section className="mb-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.8764269025487!2d74.3142525742279!3d31.445068750861054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906cbd12a8403%3A0x568e8ad71dab1c6d!2sMinhaj%20University%20Lahore!5e0!3m2!1sen!2s!4v1708352530454!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ bordre: "0px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </Box>
        </Box>
        <div style={{ background: "#616161", color: "white", textAlign: "center", padding: "15px" }}>
				© 2024 Junaid Arshad. All Rights Reserved.
			</div>
        </>
        


    )
}


