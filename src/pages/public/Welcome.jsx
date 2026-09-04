import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shiyoraLogo from "../../assets/shiyora.logo.png";
import "./Welcome.css";

function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home", { replace: true });
        }, 2500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="welcome-screen">

            {/*BACKGROUND*/}

            <div className="welcome-background">

                <div className="welcome-orb welcome-orb-cyan"></div>

                <div className="welcome-orb welcome-orb-purple"></div>

                <div className="welcome-orb welcome-orb-blue"></div>

                <div className="welcome-grid"></div>

            </div>


            {/* TOP BRAND */}

            <div className="welcome-top-brand">

                <img
                    src={shiyoraLogo}
                    alt="Shiyora"
                />

                <span>SHIYORA</span>

            </div>


            {/* MAIN CONTENT*/}

            <main className="welcome-content">

                {/* logo */}

                <div className="welcome-logo-container">

                    <div className="welcome-logo-glow"></div>

                    <img
                        src={shiyoraLogo}
                        alt="Shiyora Logo"
                        className="welcome-logo"
                    />

                </div>



                {/* text */}
                <div className="welcome-text">


                    {/* Badge */}

                    <div className="welcome-badge">

                        <span className="badge-dot"></span>

                        SMART LEARNING PLATFORM

                    </div>


                    {/* Main Heading */}

                    <h1 className="welcome-title">

                        Learn.

                        <span> Grow.</span>

                        {" "}Achieve.

                    </h1>


                    {/* Subtitle */}

                    <p className="welcome-subtitle">

                        Your learning journey starts with

                        <strong> Shiyora</strong>

                    </p>


                    {/* Description */}

                    <p className="welcome-description">

                        Learn smarter. Build skills. Track your progress.

                    </p>


                </div>


                {/* loading */}

                <div className="welcome-loading">

                    <div className="loading-info">

                        <span>
                            Preparing your learning journey
                        </span>

                        <span className="loading-dots">

                            <i></i>
                            <i></i>
                            <i></i>

                        </span>

                    </div>


                    <div className="loading-track">

                        <div className="loading-progress"></div>

                    </div>

                </div>

            </main>


            {/*FOOTER */}

            <div className="welcome-footer">

                <span>Learn</span>

                <b>•</b>

                <span>Grow</span>

                <b>•</b>

                <span>Achieve</span>

            </div>

        </div>
    );
}

export default Welcome;