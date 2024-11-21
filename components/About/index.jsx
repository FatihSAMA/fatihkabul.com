import AboutMe from "./AboutMe"
import TechStack from "./TechStack"
import SocialAccounts from "./SocialAccounts"
import Contact from "./Contact"
// import TextTyping from "../TextTyping"


export default function About(){
    return(
        <section id="about" className="mb-24">
            <div className="container relative">
                <div className="h-full aspect-square rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[-1]"
                style={{
                    background: "radial-gradient(circle, rgba(169,88,231,.2) 0%, rgba(169,88,231,0) 70%)",
                }} />

                <h2 className="subtitle mb-12 text-center w-full">
                    {/* <TextTyping text={"Hakkimda"} /> */}
                    HAKKIMDA
                </h2>

                <div className="flex flex-wrap gap-4 mb-4">

                    <AboutMe />

                    <SocialAccounts />

                </div>

                <div className="flex flex-wrap gap-4">

                    <Contact />

                    <TechStack />

                </div>

            </div>
        </section>
    )
}