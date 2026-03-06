import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {show && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        background: "var(--btn-hover-color)",
                        color: "var(--black)",
                        border: "none",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                        transition: "all 0.3s ease",
                        zIndex: 1000
                    }}
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    );
};

export default BackToTop;

