import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero Section with Video */}
      <div className="hero-section">
        <video autoPlay muted loop id="bgVideo" playsInline>
          <source src="/946146-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 style={{ fontSize: "3.5rem" }}>
            Innovative Software<br />Solutions for Your Business
          </h1>
          <p style={{ fontSize: "1.3rem" }}>
            Custom software development and application migration services tailored to your needs.
          </p>
        </div>
      </div>

      {/* Two Column Description */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "30px",
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <div style={{ flex: "1 1 45%" }}>
          <h3 style={{ fontWeight: 600 }}>Your Trusted Tech Partner</h3>
          <p style={{ color: "#555" }}>
            At Rthreevision Technologies, we specialize in custom software development, application migration,
            and database migration, ensuring your business stays ahead with cutting-edge technology tailored to your needs.
          </p>
        </div>

        <div style={{ flex: "1 1 45%" }}>
          <h3 style={{ fontWeight: 600 }}>Empowering Your Digital Transformation</h3>
          <p style={{ color: "#555" }}>
            Our team is dedicated to delivering high-quality software solutions that enhance efficiency and drive growth,
            helping businesses transition smoothly to modern technologies with expert guidance and support.
          </p>
        </div>
      </div>

      {/* Image Banner */}
      <section style={{ padding: "50px 0", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1400px", margin: "auto", textAlign: "center" }}>
          <img
            src="/photo-1524221629551-6dd14def5ffd.png"
            alt="Web App Development"
            style={{
              width: "100%",
              maxWidth: "1170px",
              borderRadius: "30px",
              boxShadow: "0 5px 25px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      
      <section
      
        style={{
          padding: "80px 10px",
          backgroundColor: "#0a2540",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#ffffff",
            }}
          >
            Our Services Offered
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#ddd",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            Expert software development, application migration, and database migration tailored to your business needs.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
        
          {/* Card 1 */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              overflow: "hidden",
              flex: "1 1 30%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/pexels-thisisengineering-3862599.png"
              alt="Custom Software Solutions"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontWeight: "bold", color: "#000" }}>
                Custom Software Solutions
              </h3>
              <p style={{ color: "#444" }}>
                Tailored software development to meet your unique business requirements and goals effectively.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              overflow: "hidden",
              flex: "1 1 30%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/pexels-divinetechygirl-1181244.png"
              alt="Application Migration Services"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontWeight: "bold", color: "#000" }}>
                Application Migration Services
              </h3>
              <p style={{ color: "#444" }}>
                Seamless migration of applications from outdated technologies to modern platforms for enhanced performance.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              overflow: "hidden",
              flex: "1 1 30%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/photo-1524221629551-6dd14def5ffd.png"
              alt="Database Migration"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontWeight: "bold", color: "#000" }}>
                Database Migration
              </h3>
              <p style={{ color: "#444" }}>
                Reliable migration of databases ensuring data integrity and minimal downtime during the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Home;
