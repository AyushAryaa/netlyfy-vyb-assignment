import Link from 'next/link';
import Image from 'next/image';
import logoimage from './img/logo.png';
import searchIcon from './img/searchicon.png';
import userIcon from './img/user.png';
import dropDownIcon from './img/drop.png';


import img2 from './img/2.png';
export default function LoginPage(){
    return(
        <div className='main-container mx-30 '>
          <header className='header-section w-[1070px] mx-auto flex flex-row justify-around mt-5 h-20  font items-center'>
            <Link href='/'>
              <Image
                alt='logo of company'
                className='logo-area '
                width={65}
                src={logoimage}
              />
            </Link>

            <div className='search-area flex flex-row w-1/4 h-11 bg-white rounded-full items-center '>
              <button>
                <Image
                  className='search-icon p-1 ml-5'
                  width={30}          
                  src={searchIcon}
                  alt='fill'
                />
              </button>
              <div>
                <input
                  className='input-area w-48  border-white text-black'
                  type='text'
                  placeholder='Search Creator/Product'
                  alt='fill'
                />
              </div>
            </div>
        

            <button className='text-xl font-bold'>verce
              <h1>Fav Creators</h1>
            </button>

            <button className='text-xl font-bold' >
              <h1>Merchandise</h1>
            </button>

            <button className='text-xl font-bold'>
              <h1>Brand</h1>
            </button>

            <button className='text-xl font-bold'>
              <h1>Digital</h1>
            </button>

            <button className='user-button-area rounded-xl bg-white flex flex-row my-2 h-9 w-20 justify-around items-center'>
              <Image
                alt='user Icon'
                width={12}
                src={userIcon}
              />
              <Image
                width={12}
                src={dropDownIcon}
                alt='fill'
              />
            </button>
          </header>

          <section className='mt-7 w-[1070px] mx-auto'>
            <div className='flex flex-row bg-black ml-5 rounded-3xl'>
              <div>
                <Image className='ml-24 mt-20' alt='image' width={400} src={img2} />
              </div>
              <div className="flex  min-h-screen bg-black text-white ml-36">
                <div className="w-full max-w-md p-8 space-y-6 rounded-lg mt-10">
                  <h2 className="text-3xl font-semibold text-center">Login</h2>

                  <button className="flex items-center justify-center w-full px-4 py-2 text-black bg-white border rounded-md">
                    Login with Google
                  </button>

                  <div className="relative flex items-center justify-center mt-4">
                    <span className="absolute px-3 text-gray-400 bg-black">OR</span>
                    <div className="w-full border-t border-gray-700"></div>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 mt-1 text-black bg-gray-200 rounded-md focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 mt-1 text-black bg-gray-200 rounded-md focus:outline-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-4 font-semibold text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-md"
                    >
                      Login
                    </button>
                  </form>

                  <p className="mt-6 text-center text-gray-400">
                    Do not have an account{" "}
                    <a href="/register" className="text-green-400 hover:underline">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
              
            </div>
          </section>
      </div>
    )
}