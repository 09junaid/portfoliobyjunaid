// import React from "react";
import AOS, { init } from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
    const [text] = useTypewriter({
        words: [
            "Junaid Arshad",
            "Full-Stack Web Developer",
            "MERN-Stack Developer",
        ],
        loop: {},
        typeSpeed: 120,
    });
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section
                id="home"
                className="banner_wrapper d-flex"
                style={{
                    background:
                        "linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.10)),url(/images/3.jpg)",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 order-lg-1 order-2 banner-content">
                            <h2
                                className="text-uppercase position-relative"
                                style={{ color: "#616161" }} data-aos="fade-right"
                            >
                                Hello
                            </h2>
                            <h1
                                className="text-uppercase position-relative"
                                style={{ color: "#616161" }} data-aos="fade-right"
                            >
                                I am
                                <span data-aos="fade-right"
                                    style={{
                                        color: "rgb(230, 126, 34)",
                                        background:
                                            "linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.10))",
                                    }}>
                                    {text}
                                </span>
                                <span style={{ color: "rgb(230, 126, 34)" }}>
                                    <Cursor />
                                </span>
                            </h1>
                            <h5 data-aos="fade-right"
                                className="text-uppercase position-relative"
                                style={{ color: "#616161" }}>
                                MERN Stack Developer
                            </h5>
                            <div className="mt-5" data-aos="fade-right" style={{ display: "flex", gap: "5px" }}>
                                <NavLink to="/contacts" style={{ textDecoration: "none" }}>
                                    <button className="button-88" role="button">
                                        Connect now
                                    </button>
                                </NavLink>
                                <NavLink to="/service" style={{ textDecoration: "none" }}>
                                    <button className="button-99" role="button">
                                        Learn more
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-2 order-1">
                            <div className="top-right-img" data-aos="zoom-in">
                                <img
                                    src="/images/pic-logo.png"
                                    alt="mypic"
                                    className="img-fluid"
                                    width="330"
                                    height="500"
                                    style={{ filter: "drop-shadow(10px 0px 10px #FFB74D )" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------Get started Image work------------------"#F3F3F3"---------- #F3F3F3--linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.10)),url(/images/3.jpg)*/}
            <section
                id="home"
                className="banner_wrapper2"
                style={{
                    // background: "#F3F3F3",
                    // backgroundSize: "cover",
                    // backgroundAttachment: "fixed",
                }}
            >
                {/* ---------------Main Div---------------- */}
                <div className="get-main">
                    {/* --------------img section--------------- */}
                    <div className="imgagemain">
                        <img
                            src="/images/getstart-pic.png"
                            alt="mypic"
                            className="img-fluid"
                            width="330"
                            height="500"
                            style={{ filter: "drop-shadow(10px 0px 10px #616161 )" }}
                        />
                    </div>

                    {/* ------------------Content div-------------------- */}
                    <div className="parastart">
                        <p
                            style={{
                                borderBottom: "1px solid #616161",
                                borderLeft: "1px solid #616161",
                                padding: "3px 3px",
                                background:
                                    "linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.10))",
                            }}
                        >
                            We are here to help you
                        </p>
                        <h1>Get Started</h1>
                        <br />
                        <p style={{ fontFamily: "sans-serif" }}>
                            Ready to bring your web application idea to life? Contact us today to schedule a consultation with our MERN stack experts. Let's collaborate to build a powerful, scalable, and user-friendly solution that propels your business to new heights.
                        </p>
                    </div>
                </div>
            </section>
            {/*----------Skills Section--------------- */}
            <section className="py-5 py-xl-6" style={{
                background: "linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.10)),url(/images/3.jpg)",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className="container mb-5 mb-md-6" data-aos="zoom-in">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                            <h2 className="mb-4 display-5" style={{ color: "#d35400" }}>Skills</h2>
                            <p className="mb-4 mb-md-5" style={{ color: "#2c3e50" }}>
                                Crafting succinct skill descriptions can be challenging, but here's a go: "Mastering intricate problem-solving through strategic analysis and innovative solutions."</p>
                            <hr className="w-50 mx-auto mb-0" style={{ color: "black" }} />
                        </div>
                    </div>
                </div>
                <div className="container overflow-hidden">
                    <div className="row justify-content-xl-center gy-3 gy-sm-4">
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-right">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">HTML <i className="fa fa-brands fa-html5" style={{ color: "#E44D25" }}></i> </h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Proficient in HTML for creating structured and visually appealing web pages adhering to standards and best practices.
                                </p>
                                <div className="progress">
                                    <div className="progress-bar w-87 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="HTML" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100">87%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-left">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">CSS <i className="fa fa-brands fa-css3-alt" style={{ color: "#379AD6" }}></i></h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Experienced in CSS for styling and enhancing the presentation of HTML elements across various devices and screen sizes.</p>
                                <div className="progress">
                                    <div className="progress-bar w-80 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="CSS" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-right">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">BootStrap <i className="fa fa-brands fa-bootstrap" style={{ color: "#7211F6" }}></i></h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Skilled in Bootstrap for rapid development of responsive and visually appealing websites through its pre-designed components and grid system.</p>
                                <div className="progress">
                                    <div className="progress-bar w-85 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="BootStrap" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-left">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">Material UI (MUI) <img src="/images/mui-icon.png" alt="muiicon" width="25" height="25" /></h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Proficient in Material-UI for designing user interfaces with
                                    pre-designed React components following Google Material Design guidelines.</p>
                                <div className="progress">
                                    <div className="progress-bar w-75 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="Material UI (MUI)" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-right">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">JavaScript <i className="fa fa-brands fa-js" style={{ color: "#F0DB4F", }}></i></h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Proficient in JavaScript for creating interactive and dynamic web applications,
                                    manipulating DOM elements, and handling asynchronous operations.</p>
                                <div className="progress">
                                    <div className="progress-bar w-75 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="JavaScript" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-left">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">React <i className="fa fa-brands fa-react" style={{ color: "#00CCFF" }}></i></h3>
                                <p className="text-secondary fst-italic mb-4">Experienced in React for building scalable and efficient
                                    user interfaces with reusable components, Hooks, redux toolkit and state management.
                                </p>
                                <div className="progress">
                                    <div className="progress-bar w-85 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="React" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-right">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">MongoDB <img src="/images/mongo-icon.png" alt="mongoicon" width="30" height="30" /></h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Proficient in MongoDB for developing flexible and scalable NoSQL databases,
                                    enabling efficient storage and retrieval of data in JSON documents.</p>
                                <div className="progress">
                                    <div className="progress-bar w-80 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="MongoDB" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-5" data-aos="fade-left">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">Node.js <i className="fa fa-brands fa-node-js" style={{ color: "#8BC500" }}></i></h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Skilled in Node.js for building scalable server-side applications with JavaScript,
                                    utilizing event-driven, non-blocking I/O model with expressjs.</p>
                                <div className="progress">
                                    <div className="progress-bar w-80 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="Node.js" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-xl-5" data-aos="fade-up">
                            <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                                <h3 className="fw-bold mb-2">MERN Stack</h3>
                                <p className="text-secondary fst-italic mb-4">
                                    Experienced in MERN stack development, utilizing MongoDB, Express.js, React, and Node.js for building full-stack web applications.</p>
                                <div className="progress">
                                    <div className="progress-bar w-85 progress-bar-striped bg-success progress-bar-animated" role="progressbar" aria-label="MERN Stack" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -----------------------Footer Page-------------------------- */}
            <div className="container1-fluid">
                <div className="card1">
                    <div className="heading1 text-center">
                        <div className="head1">
                            <img
                                src="/images/junaid-logo.png"
                                alt="picx"
                                height="200"
                                style={{ transform: "translate(0%,-70%)" }}
                            />
                        </div>
                        <p className="bdr1"></p>
                    </div>
                    <div className="card1-body">
                        <div className="row m-0 pt-5">
                            <div className="card1 col-12 col-md-3">
                                <div className="card1-content">
                                    <i className="fa fa-home fa-3x"></i>
                                    <div className="card1-title">Home</div>
                                    <p>
                                        <small>
                                            Go to Home
                                        </small>
                                    </p>
                                    <div className="learn-more">
                                        <NavLink to="/" style={{ textDecoration: "none", color: "#FFB74D" }}>
                                            <small>
                                                LEARN MORE
                                                <label>
                                                    <i className="fa fa-angle-right"></i>
                                                </label>
                                            </small>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="card1 col-12 col-md-3">
                                <div className="card1-content">
                                    <i className="fa fa-info-circle fa-3x"></i>
                                    <div className="card1-title">About</div>
                                    <p>
                                        <small>
                                            Go to about session
                                        </small>
                                    </p>
                                    <div className="learn-more">
                                        <NavLink to="/about" style={{ textDecoration: "none", color: "#FFB74D" }}>
                                            <small>
                                                LEARN MORE
                                                <label>
                                                    <i className="fa fa-angle-right"></i>
                                                </label>
                                            </small>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="card1 col-12 col-md-3">
                                <div className="card1-content">
                                    <i className="fa fa-cog fa-3x"></i>
                                    <div className="card1-title">Services</div>
                                    <p>
                                        <small>
                                            Go to services
                                        </small>
                                    </p>
                                    <div className="learn-more">
                                        <NavLink to="/service" style={{ textDecoration: "none", color: "#FFB74D" }}>
                                            <small>
                                                LEARN MORE
                                                <label>
                                                    <i className="fa fa-angle-right"></i>
                                                </label>
                                            </small>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card1-footer row m-0">
                        <div
                            className="icolor"
                            style={{ display: "flex", justifyContent: "center"}}
                        >
                            {/* style={{textAlign:"end"}} */}
                            <p>
                                <small className="follow1-text">
                                    FOLLOW US ON SOCIAL MEDIA
                                </small>
                                <label class="footer1-right"style={{display:"flex",justifyContent:"center",gap:"15px",alignItems:"center",color:"#FFB74D",fontSize:"20px"}}>
                                   <a href="https://www.linkedin.com/in/junaid-arshad-37baa5216/" target="_blank" style={{color:"#FFB74D"}}> <i className="fa-brands fa-instagram"></i></a>
                                   <a href="https://www.linkedin.com/in/junaid-arshad-37baa5216/" target="_blank" style={{color:"#FFB74D"}}> <i  className="fa-brands fa-facebook-square"></i></a>
                                    <a href="https://www.linkedin.com/in/junaid-arshad-37baa5216/" target="_blank" style={{ textDecoration: "none", marginLeft: "5px",color:"#FFB74D" }}><i className="fa-brands fa-linkedin"></i></a>
                                   <a href="https://twitter.com/junaid_ars82864" target="_blank" style={{color:"#FFB74D"}}><i class="fa-brands fa-x-twitter"></i></a>
                                </label>
                            </p>
                        </div>
                    </div>

                    <p
                        style={{ textAlign: "center", height: "0px", paddingTop: "5px" }}
                    >
                        © 2024 Junaid Arshad. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
};
