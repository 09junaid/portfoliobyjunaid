import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import "./services.css"

export const Services = () => {
useEffect(()=>{
AOS.init({duration:2000});
},[]);
	return (
		<>
			<section className="section-services"style={{
				background: "linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.10)),url(/images/20545.jpg)",
				backgroundSize: "cover", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"
						}}>
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-md-10 col-lg-8">
							<div className="header-section">
								<h2 className="title">Exclusive <span>Services</span></h2>
								<p className="description">At this, we specialize in crafting modern,
									scalable, and feature-rich web applications using the powerful MERN stack.
									Whether you're a startup looking to establish your online presence or an
									established business aiming to revamp your digital footprint, our team of expert
									MERN stack developers is here to turn your ideas into reality.</p>
							</div>
						</div>
					</div>
					<div className="row">
						{/* <!-- Start Single Service --> */}
						<div className="col-md-6 col-lg-4">
							<div className="single-service"data-aos="zoom-in">
								<div className="part-1">
									<i className="fa fa-500px" style={{ color: "#FFB74D" }}></i>
									<h3 className="title">Custom Web Development</h3>
								</div>
								<div className="part-2">
									<p className="description">We build tailor-made web applications from scratch,
										precisely tailored to meet your unique business requirements.
										Our team works closely with you to understand your goals, challenges,
										and vision, ensuring that the end product aligns perfectly with your expectations.</p>
									{/* <a href="#"><i class="fa-solid fa-circle-check"></i></a> */}
								</div>
							</div>
						</div>
						{/* <!-- / End Single Service -->
				<!-- Start Single Service --> */}
						<div className="col-md-6 col-lg-4">
							<div className="single-service"data-aos="zoom-in">
								<div className="part-1">
									<i className="fab fa-angellist" style={{ color: "#FFB74D" }}></i>
									<h3 className="title">Full-Stack Expertise</h3>
								</div>
								<div className="part-2">
									<p className="description">From frontend to backend, we've got you covered.
										Our developers are proficient in all aspects of the MERN stack – MongoDB,
										Express.js, React.js, and Node.js – allowing us to create seamless, integrated
										solutions that deliver exceptional performance and user experience.</p>
									{/* <a href="#"><i class="fa-solid fa-check-double"style={{fontSize:"30px"}}></i></a> */}
								</div>
							</div>
						</div>
						{/* <!-- / End Single Service -->
				<!-- Start Single Service --> */}
						<div className="col-md-6 col-lg-4">
							<div className="single-service"data-aos="zoom-in">
								<div className="part-1">
									<i className="fa fa-award" style={{ color: "#FFB74D" }}></i>
									<h3 className="title">Scalability and Performance</h3>
								</div>
								<div className="part-2">
									<p className="description"> We design and develop applications with scalability, reliability, efficeint
										and performance in mind. Whether you're expecting a handful of users or millions,
										our solutions are built to handle growth effortlessly while maintaining optimal
										speed and responsiveness.</p>
									{/* <a href="#"><i className="fa fa-arrow-circle-right"></i>Read More</a> */}
								</div>
							</div>
						</div>
						{/* <!-- / End Single Service -->
						<!-- Start Single Service --> */}
						<div className="col-md-6 col-lg-4">
							<div className="single-service"data-aos="zoom-in">
								<div className="part-1">
									<i className="fa fa-desktop" style={{ color: "#FFB74D" }}></i>
									<h3 className="title">Responsive Design</h3>
								</div>
								<div className="part-2">
									<p className="description">In today's mobile-driven world, having a responsive web application is crucial.
										Our team ensures that your application looks and functions flawlessly across all devices,
										providing a consistent and intuitive user experience regardless of screen size or platform.</p>
									{/* <a href="#"><i className="fa fa-arrow-circle-right"></i>Read More</a> */}
								</div>
							</div>
						</div>
						{/* <!-- / End Single Service -->
						<!-- Start Single Service --> */}
						<div className="col-md-6 col-lg-4">
							<div className="single-service"data-aos="zoom-in">
								<div className="part-1">
									<i className="fa fa-broadcast-tower" style={{ color: "#FFB74D" }}></i>
									<h3 className="title">Agile Development Process</h3>
								</div>
								<div className="part-2">
									<p className="description">We follow an agile development methodology, breaking down the project into manageable
										iterations and delivering working increments at regular intervals.
										This approach allows for greater flexibility, transparency,
										and collaboration throughout the development lifecycle.</p>
									{/* <a href="#"><i className="fa fa-arrow-circle-right"></i>Read More</a> */}
								</div>
							</div>
						</div>
						{/* <!-- / End Single Service -->
				        <!-- Start Single Service --> */}
						<div className="col-md-6 col-lg-4">
							<div className="single-service"data-aos="zoom-in">
								<div className="part-1">
									<i className="fa fa-ranking-star" style={{ color: "#FFB74D" }}></i>
									<h3 className="title">Quality Assurance</h3>
								</div>
								<div className="part-2">
									<p className="description"> Quality is our top priority. We conduct rigorous testing at every
										stage of development to identify and address any issues early on, ensuring that the final
										product meets the highest standards of reliability,scaleablity,efficient, security, and performance.</p>
									{/* <a href="#"><i className="fa fa-arrow-circle-right"></i>Read More</a> */}
								</div>
							</div>
						</div>
						{/* <!-- / End Single Service --> */}
					</div>
				</div>
			</section>
			<div style={{ background: "#616161", color: "white", textAlign: "center", padding: "15px" }}>
				© 2024 Junaid Arshad. All Rights Reserved.
			</div>
		</>
	)
}