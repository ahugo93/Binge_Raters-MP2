import React from "react";
import { useNavigate } from "react-router-dom";


function About(){
    const navigate = useNavigate();

function handleClick(){
    navigate("/about")
}

    return (
        <h2>
            Browse all your favorite movies and shows here
            while still being able to rate and comment on anything
            you love or hate.
        </h2>
    )

}

export default About;