function AboutMe () {
    return(
        <>
        <section className="about-page">
            <div className='about-me'>
                <h1 className="page-title">About Me</h1>
                <div className="main-about">
                    <p>I started my programming journey back in 2020 when during the lockdown I discovered the wonderful world of games development. I started by learning C# in the Unity game engine and from there I have branched out into all sorts of things. I am currently working as a data analyst for RoslinCT and in my free time I still try to make time to practice programming in python, making games in the Godot game engine using GDScript, making websites such as this using Typescript, and creating little devices using Arduinos as the main controller.</p>
                    <p>When I'm not programming I like to paint miniatures, take hikes along mountains as well as caring for my planted tank filled with shrimp and fish.</p>
                </div>
                <h3>What I know:</h3>
                <ul>
                    <li>SCSS</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>Reactjs</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Unity Game Engine</li>
                    <li>Godot Game Engine</li>
                </ul>
            </div>
        <div className="images">
            <img className="portrait-1" src="./portrait-1.jpg" />
            <img className="shrimp-1" src="./shrimp.jpg" />
        </div>
        </section>
        </>
    )
}

export default AboutMe;