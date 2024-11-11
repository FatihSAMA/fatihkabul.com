import Review from "./Review";

export default function Reviews(){
    return(
        <section id="reviews" className="py-24">
            <div className="container">
                <h2 className="subtitle mb-12">
                    Degerlendirmeler
                </h2>
                <Review name={"Fatih"} title={"CEO at Google"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni aut. Perspiciatis repellendus expedita, quaerat tempore eius sequi eos corrupti omnis sint quae."}  />
            </div>
        </section>
    )
} 