import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Smarket
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
        The simple stock market reserach app for the rest of us.
      </p>
      <div className="flex justify-center space-x-6">
      <p className="text-sm text-gray-600 dark:text-gray-300 font-mono font-light">
      To get started, search for a stock/etf in the search bar<br /> Or check out some of our research below
        </p>
      </div>
    </section>
  );
}
