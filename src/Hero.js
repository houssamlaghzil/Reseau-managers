import React from "react";


const Hero =({handleLogout})=>{
    return(
        <section className="Hero">
            <nav>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;