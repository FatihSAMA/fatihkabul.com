import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Navbar from "@/components/Header/Navbar";
import Portfolio from "@/components/Portfolio";
// import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Shape from "@/components/Shape";

export default function Home() {
  return (
    <main className="!max-w-screen overflow-hidden relative">

      <Shape />

      <Navbar />

      {/* Black Screen */}
      <div className="fixed inset-0 w-full h-full bg-black/40 -z-[5] pointer-events-none" /> 
      {/* Grain */}
      <div
      className="fixed inset-0 w-[300%] h-[300vh] opacity-[.04] -z-[2] pointer-events-none"
      style={{
        backgroundImage: "url('/noise.png')"
      }}
      />
      {/* Top Light */}
      <div
          className="fixed -translate-y-1/2 top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-[1]"
          style={{
              background: "radial-gradient(circle, rgba(99,215,215,0.2) 0%, rgba(99,215,215,0) 70%)"
          }}
      />

      <Hero />
      <Brands />
      <Services />
      <Portfolio />
      {/* <Reviews /> */}
      <About />
      <Footer />

      {/* Black gradient in bottom */}
      <div className="w-full fixed h-20 bottom-0 bg-gradient-to-t from-black to-black/0" />

      {/* Bottom Light */}
      <div
        className="absolute translate-y-1/2 bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-[5]"
        style={{
            background: "radial-gradient(circle, rgba(99,215,215,0.2) 0%, rgba(99,215,215,0) 70%)"
        }}
      />

      
    </main>
  );
}
