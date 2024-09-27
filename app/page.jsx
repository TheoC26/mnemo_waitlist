import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="top-0 left-0 mx-4 mt-4">
          <Image
            src="/MnemoLogoNoText.png"
            alt="Mnemo Logo"
            width={1000} // Set width of the logo
            height={1000} // Set height of the logo
            className="w-16 h-16" // Optional Tailwind CSS classes for styling
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="bg-white pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-6xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block text-[#a796cc]">Introducing </span>
                      <span className="block text-black">Mnemo</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Revive memories, Reunite Hearts. Join our mailing list to
                      receive updates about our product.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form
                        className="sm:mx-auto sm:max-w-xl lg:mx-0"
                        action="https://api.web3forms.com/submit"
                        method="POST"
                      >
                        <div className="sm:flex">
                          <input
                            type="hidden"
                            name="access_key"
                            value="7048e4b3-ce01-4617-b3e3-7545fedb7e7d"
                          ></input>
                          <input
                            type="hidden"
                            name="subject"
                            value="New Waitlist"
                          ></input>
                          <div className="min-w-0 flex-1">
                            <label for="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              className="block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                              autocomplete="off"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full rounded-md bg-[#a796cc] py-3 px-4 font-medium text-white transition-all shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                              Join
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* button for apple store */}
                    <div className="mt-3">
                      <a
                        href="https://apps.apple.com/us/app/mnemo-remember/id6680171876"
                        className="block w-full rounded-md bg-[#a796cc] py-3 px-4 font-medium text-white transition-all shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        Download on the App Store
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 hidden lg:flex justify-center items-center">
                  <Image
                    className="w-2/3"
                    width={1000} // Set width of the logo
                    height={1000} // Set height of the logo
                    src="/mnemo_product.png"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            <div className="px-5 py-2">
              <a
                href="/about"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            {/* <div className="px-5 py-2">
              <a
                href="#"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Press
              </a>
            </div> */}
            <div className="px-5 py-2">
              <a
                href="/privacy"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Privacy
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="/support"
                className="text-base text-gray-500 hover:text-gray-900"
              >
                Support
              </a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {/* <a
              href="https://twitter.com/web3templates"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a> */}
            <a
              href="https://www.instagram.com/mnemo_remember"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <svg
                // xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-7 w-7 mt-0.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            © 2024 Mnemo. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
