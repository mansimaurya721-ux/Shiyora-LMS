import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shiyoraLogo from "../../assets/shiyora-logo.png";

function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home", { replace: true });
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="welcome-screen">

            {/* Background Effects */}
            <div className="welcome-glow welcome-glow-one"></div>
            <div className="welcome-glow welcome-glow-two"></div>

            {/* Grid */}
            <div className="welcome-grid"></div>

            {/* Main Content */}
            <div className="welcome-content">

                {/* LEFT — BIG LOGO */}
                <div className="welcome-logo-wrapper">
                    <div className="welcome-logo-box">

                        <img
                            src={shiyoraLogo}
                            alt="Shiyora Logo"
                            className="welcome-logo"
                        />

                    </div>
                </div>


                {/* RIGHT — TEXT */}
                <div className="welcome-text">

                    <p className="welcome-small">
                        YOUR LEARNING JOURNEY STARTS HERE
                    </p>

                    <h1 className="welcome-title">
                        Welcome to
                        <br />
                        <span>Shiyora</span>
                    </h1>

                    <p className="welcome-subtitle">
                        Learn smarter. Grow faster.
                    </p>

                    <p className="welcome-description">
                        Your intelligent learning platform
                    </p>

                    {/* Loading */}
                    <div className="welcome-loader">
                        <div className="welcome-loader-bar"></div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Welcome;