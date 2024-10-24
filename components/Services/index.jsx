import ServiceBox from "./ServiceBox"

const services = [
    {
        icon: "/services/ui.png",
        title: "Arayüz Tasarımı (UI/UX)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet pariatur cumque rem." 
    },
    {
        icon: "/services/webdesign.png",
        title: "Website Tasarımı",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet pariatur cumque rem." 
    },
    {
        icon: "/services/development.png",
        title: "Yazılım Geliştirme",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet pariatur cumque rem." 
    },
]

export default function Services(){
    return(
        <section id="services" className="my-32 relative">

            <div className="container">
                <h2 className="subtitle mb-16">
                    Hizmetlerim
                </h2>

                <div className="flex justify-between flex-wrap gap-8">
                    {services.map((service, index) => (
                        <ServiceBox {...service} key={index} />
                    ))}
                </div>
            </div>

            {/* Right Light */}
            <div
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] aspect-square rounded-full pointer-events-none -z-[1]"
                style={{
                    background: "radial-gradient(circle, rgba(169,88,231,0.2) 0%, rgba(169,88,231,0) 70%)"
                }}
            />

        </section>
    )
}