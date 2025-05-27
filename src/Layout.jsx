export default function Layout({ children }) {
    return (
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Guest List</h1>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </nav>
  
        {/* Page content */}
        <main className="container mx-auto py-10 px-4">
          {children}
        </main>
      </div>
    );
  }
  