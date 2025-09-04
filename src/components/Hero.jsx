export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center px-6 py-32 overflow-hidden text-center bg-gradient-to-br from-indigo-50 via-white to-pink-50"
    >
      {/* Glowing background blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-indigo-400/30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-pink-400/30 blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-72 h-72 bg-purple-400/20 blur-3xl animate-pulse-slow"></div>

      {/* Glassmorphism card effect */}
      <div className="relative z-10 max-w-3xl p-10 border shadow-xl rounded-2xl bg-white/20 backdrop-blur-lg border-white/30">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
          Transform Your Idea <br className="hidden sm:inline-block" />
          Into a <span className="text-indigo-600">Brand</span>
        </h1>

        <p className="mb-10 text-lg text-gray-700 md:text-xl">
          AI-powered brand kit generator for founders. Generate a name, color palette,
          bio, and call-to-action that truly represents your vision.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#form"
            className="px-10 py-4 font-semibold text-white transition-transform shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:scale-105 hover:from-indigo-600 hover:to-purple-600"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-10 py-4 font-medium text-indigo-600 transition border-2 border-indigo-200 rounded-xl hover:bg-indigo-50"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
