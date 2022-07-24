/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]
  
  export default function Navbar(props) {
    return (
      <header >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-sky-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">COS Plumbing</span>
                <img
                  className="h-14 sm:h-24 w-auto"
                  src={props.logo}
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-sky-400 hover:text-sky-300">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4 hidden lg:block ">
              <p
                className="inline-block"
              >
              <span className="font-bold">Call Us:</span>  (719) 640-4875
              </p>        
            </div>
            <div className="space-x-4">
              <a
                href="/contact"
                className="inline-block bg-sky-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Contact Us
              </a>        
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-sky-400 hover:text-sky-300">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  