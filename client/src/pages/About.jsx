import { NavLink } from "react-router-dom"

export const About = () => {
    return (
        <>
            {/* <section className="py-3 py-md-5 mt-5"style={{ background:"linear-gradient(rgba(0,0,0,0.12),rgba(0,0,0,0.12)),url(images/aboutus-pic.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"}}> */}
                <section  className="py-3 py-md-5 mt-5" style={{background:"#F3F3F3"}}>
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6">
                            <img className="img-fluid rounded" loading="lazy" src="/images/40752.jpg" alt="About 2" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-10">
                                    <h2 className="mb-3" style={{borderBottom:"2px solid grey"}}>Why Choose Us?</h2>
                                    <p className="lead fs-4 mb-3 mb-xl-5">With years of experience in MERN stack development, our team has the skills and knowledge to tackle projects of any size and complexity.
                                    We prioritize clear communication, transparency, and client satisfaction every step of the way, striving to exceed your expectations and deliver results that drive your business forward.
                                    Our commitment to your success doesn't end with the launch of your application. We provide ongoing support and maintenance services to keep your application running smoothly and adapt to any future needs or challenges.</p>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Experience and Expertise</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Client-Centric Approach</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Dedicated Support</p>
                                        </div>
                                    </div>
                                    {/* <div className="d-flex align-items-center mb-4 mb-xl-5">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Figma</p>
                                        </div>
                                    </div>  
                                    btn-outline-primary */}
                                    <NavLink to="/contacts" className="btn bsb-btn-xl  mt-2 rounded-pill" style={{color:"#FFB74D",background:"#616161"}}>Connect Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div style={{ background: "#616161", color: "white", textAlign: "center", padding: "15px" }}>
                © 2024 Junaid Arshad. All Rights Reserved.
            </div>
        </>
    )
}