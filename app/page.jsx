import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="">

      {/* Grain */}
      <div
      className="fixed inset-0 w-[300%] h-[300vh] opacity-[.01] -z-10"
      style={{
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')"
      }}
      />

      {/* Top Light */}
      <div
          className="absolute -translate-y-1/2 top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none -z-[5]"
          style={{
              background: "radial-gradient(circle, rgba(99,215,215,0.2) 0%, rgba(99,215,215,0) 70%)"
          }}
      />
      <Hero />
      <Brands />
      <Services />



      
    </main>
  );
}
