import React from "react";

export default function Upscroll() {

    React.useEffect( () => {
        let spanscroll = document.querySelector(".upscroll");
        window.onscroll = function () {
            if (this.scrollY >= 500) {
                spanscroll.classList.add("showscroll");
            } else {
                spanscroll.classList.remove("showscroll");
            }
        };
    });

    const scrollup= () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    };

    return (<span className="upscroll" onClick={scrollup}>up</span>);
}
