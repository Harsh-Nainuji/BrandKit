export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="flex flex-col items-center justify-between max-w-5xl gap-4 px-6 mx-auto text-gray-600 md:flex-row">
        <p className="text-sm">&copy; {new Date().getFullYear()} BrandKit AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-indigo-600">Twitter</a>
          <a href="#" className="transition hover:text-indigo-600">LinkedIn</a>
          <a href="#" className="transition hover:text-indigo-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
