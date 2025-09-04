export default function Header() {
    return (
      <header className="fixed top-0 left-0 z-50 w-full shadow-sm bg-white/90 backdrop-blur-md">
        <nav className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
          {/* Logo / Title */}
          <a href="#hero" className="text-2xl font-bold tracking-tight text-gray-900">
            BrandKit<span className="text-indigo-600">AI</span>
          </a>
  
          {/* Nav Links */}
          <div className="hidden gap-8 font-semibold text-gray-700 md:flex">
            <a href="#hero" className="transition-colors hover:text-indigo-600">Home</a>
            <a href="#about" className="transition-colors hover:text-indigo-600">About</a>
            <a href="#form" className="transition-colors hover:text-indigo-600">Generator</a>
            <a href="#how-it-works" className="transition-colors hover:text-indigo-600">How It Works</a>
          </div>
        </nav>
      </header>
    );
  }
  