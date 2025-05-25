import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="text-center mx-0 sm:mx-0 md:mx-0 lg:mx-0 relative overflow-hidden"
      style={{
        backgroundImage: "url('/stockchart.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        minHeight: "420px",
      }}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.8, zIndex: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-transparent dark:from-black/80 dark:via-black/60 dark:to-transparent z-0" />
      <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-[420px]">
        <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
          Smarket
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
          The simple stock market research app for the rest of us.
        </p>
        <div className="flex justify-center space-x-6">
          <p className="text-sm text-gray-600 dark:text-gray-300 font-mono font-light">
            To get started, search for a stock/etf in the search bar
            <br /> Or check out some of our research below
          </p>
        </div>
      </div>
    </section>
  );
}
