import react from "react";
function About({ image, about}) {
    return (
        <aside>
        <img src={image ? image  :  "https://via.placeholder.com/215"} alt="blog logo" />
            
            <p>{about}</p>
        </aside>
    );
}

export default About


{/*{image ? <img src={image} alt="blog logo" /> : <img src="https://via.placeholder.com/215" alt="blog logo" />} */ }