import Link from 'next/link';
import Image from 'next/image';
import logoimage from './stock pictures/logo.png';
import userIcon from './stock pictures/user.png';
import dropDownIcon from './stock pictures/drop.png';
import searchIcon from './stock pictures/searchicon.png';
import pageOne from './stock pictures/Hero section/iamge.png';
import frame from './stock pictures/travel section/Frame1574.png';
import frametwo from './stock pictures/travel section/unsplash_L51aR1NLGXc.png';
import darjeeling from './stock pictures/travel section/our curated travel itineraries/Frame 1575.png'
import assam from './stock pictures/travel section/our curated travel itineraries/Frame 1183.png';
import samira from './stock pictures/our influencers/samira.png';
import IndiaGate from './stock pictures/travel section/our curated travel itineraries/Frame 1182.png';
import allInfuencers from './stock pictures/illustrations/d.png';
import Security from './stock pictures/illustrations/c.png';
import payment from './stock pictures/illustrations/a.png';
import money from './stock pictures/illustrations/b.png';
import poorOne from './stock pictures/our influencers/poor.png';
import poorTwo from './stock pictures/our influencers/poortwo.png';
import poorThree from './stock pictures/our influencers/poorthree.png';
import one from './stock pictures/how to get started/1.png';
import two from './stock pictures/how to get started/2.png';
import three from './stock pictures/how to get started/3.png';
import four from './stock pictures/how to get started/4.png';
import plus from './stock pictures/plus.png';
import mines from './stock pictures/mines.png';


export default function Home() {
  return (
    
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
              />
          </div>
        </div>
        

        <button className='text-xl font-bold'>
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

        <button className='user-button-area rounded-xl bg-white  my-2 h-9 w-20 '>
          <a
            href='/loginpage'
            className='flex flex-row justify-around items-center'>
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
          </a>
        </button>
      </header>

      <section className='page-one mt-7 w-[1070px] mx-auto'>
        <div className=' motivation-and-button flex flex-row justify-between'>  
          <div className=''>
            <div>
              <div className='flex flex-row '>
                <h1 className='bg-white text-black w-fit rounded-xl text-6xl font-bold py-4 px-2 mr-2'>One</h1>
                <h1 className='bg-white text-black w-fit rounded-xl text-6xl font-bold py-4 px-2'>Stop</h1>
              </div>
              <h1 className='bg-white text-black w-fit rounded-xl text-6xl font-bold py-4 px-2 my-2'>Marketplace</h1>
              <div className='flex flex-row '>
                <h1 className='bg-white text-black w-fit rounded-xl text-6xl font-bold py-4 px-2 mr-2'>For</h1>
                <h1 id='p1' className='bg-rgb(0, 220, 130) text-black w-fit rounded-xl text-6xl font-bold py-4 px-2'>Influencers</h1>
              </div>  
            </div>
            <div>
              <h2 className='text-3xl mt-8'>
                "Unleash Your Influence: sell<br></br>
                Itineraries, Build Your Brand,<br></br>
                Create Merch, ans Share<br></br>
                Content - All in One Hub."
              </h2>
            </div>
            <div className='flex flex-row mt-10'>
              <button id='p1' className='text-black rounded-xl px-2 py-2'>Demo Store</button>
              <button id='rgb-Button' className='ml-2 '>Join Waitlist</button>
            </div>
          </div>

          <div className='first-image'>
            <Image
              width={500}
              alt='first Image'
              src={pageOne}
            />
          </div>
        </div>
      </section>

      <section className='page-two my-7 w-[1070px] mx-auto'>
        <div className='two-div flex flex-row justify-between bg-black rounded-3xl py-8'>
          <h2 className='text-3xl font-bold text-white ml-4'>Travel</h2>
          <h2 className='text-3xl font-bold text-white'>Digital</h2>
          <h2 className='text-3xl font-bold text-white'>Brand</h2>
          <h2 className='text-3xl font-bold text-white mr-4'>Merch</h2>
        </div>
      </section>

      <section className='page-three my-7 w-[1070px] mx-auto'>
        <div className='page-travel '>
          <Image
            className='travel-image rounded-t-3xl absolute -z-10'
            width={1070}
            src={frame}
            alt='travel-image'
          />
          <div className='travel-text z-10 flex flex-col items-center pt-24'>
            <h1 className='text-9xl font-bold'>TRAVEL</h1>
            <p className='w-4/6 text-center pt-20 text-3xl'>
              Trun your travel experience into itinerary,
              travel package with VYB Store and share it
              with your true folowers.
            </p>
          </div>
          
        </div>

        <div className='itineraries-area bg-black mt-12 relative -z-10'>
          <h1 className='text-center text-3xl font-bold py-12'>Explore Our Curated Travel Itineraries</h1>
          <div className='flex flex-row justify-around pb-5'>
            <div className='travle-show'>
              <Image
                className='travle-show-image -ml-5 absolute -z-10'
                width={240}
                src={darjeeling}
                alt='travel image'
              />
              <div className='z-10  mt-80'>
                <h1 className='city-name text-center text-lg font-bold'>Darjeeling Itinerary</h1>
                <h2 className='state-name text-center text-lg font-bold'>West Bengal</h2>
                <div className='part-hide flex flex-row items-center space-x-2 bg-white px-8 py-1 rounded-2xl'>
                  <h2 className='text-center text-black font-bold'>Samira Hadid</h2>
                  <Image
                    className='influencer-image rounded-full '
                    src={samira}
                    alt='samira'
                    width={25}
                  />
                </div>
                
              </div>

            </div>

            <div className='travle-show'>
              <Image
                className='travle-show-image -ml-5 absolute -z-10'
                width={240}
                src={assam}
                alt='travel image'
              />
              <div className='z-10  mt-80'>
                <h1 className='city-name text-center text-lg font-bold'>Munnar Itinerary</h1>
                <h2 className='state-name text-center text-lg font-bold'>Kerala</h2>
                <div className='part-hide flex flex-row items-center space-x-2 bg-white px-8 py-1 rounded-2xl'>
                  <h2 className='text-center text-black font-bold'>Samira Hadid</h2>
                  <Image
                    className='rounded-full '
                    src={samira}
                    alt='samira'
                    width={25}
                  />
                </div>
                
              </div>

            </div>

            <div className='travel-hidden'>
              <Image
                className='-ml-5 absolute -z-10'
                width={240}
                src={IndiaGate}
                alt='travel image'
              />
              <div className='z-10  mt-80'>
                <h1 className='text-center text-lg font-bold'>Delhi Itinerary</h1>
                <h2 className='text-center text-lg font-bold'>Delhi</h2>
                <div className='flex flex-row items-center space-x-2 bg-white px-8 py-1 rounded-2xl'>
                  <h2 className='text-center text-black font-bold'>Samira Hadid</h2>
                  <Image
                    className='rounded-full '
                    src={samira}
                    alt='samira'
                    width={25}
                  />
                </div>
                
              </div>

            </div>

            <div className='travel-hidden'>
              <Image
                className='-ml-5 absolute -z-10'
                width={240}
                src={IndiaGate}
                alt='travel image'
              />
              <div className='z-10  mt-80'>
                <h1 className='text-center text-lg font-bold'>Delhi Itinerary</h1>
                <h2 className='text-center text-lg font-bold'>Delhi</h2>
                <div className='flex flex-row items-center space-x-2 bg-white px-8 py-1 rounded-2xl'>
                  <h2 className='text-center text-black font-bold'>Samira Hadid</h2>
                  <Image
                    className='rounded-full '
                    src={samira}
                    alt='samira'
                    width={25}
                  />
                </div>
                
              </div>

            </div>
          </div>
        </div>

        <div className='frametwo relative' >

          <Image
            className='frametwo-hills rounded-3xl absolute -z-10 pt-20'
            width={1070}
            src={frametwo}
            alt='frame two'
          />
          <div className='z-10 '>
            <h2 className='hills-text-heading text-center text-2xl pt-5'>How to list?</h2>
            <div className='hills-step flex flex-row justify-center  mt-40'>
              <h2 id='step1' className='text-center text-2xl font-bold mr-52'>01<br></br><br></br>Create<br></br>Itinerary</h2>
              <h3 id='step2' className='text-center text-2xl font-bold mt-16'>02<br></br><br></br>Convert into<br></br>Travel Package</h3>
              <h4 id='step3' className='text-center text-2xl font-bold ml-52'>03<br></br><br></br>Earn by<br></br>sharing</h4>
            </div>
            <h1 className='text-center mt-28 text-2xl'>You Curate Experience,We Make It Happen</h1>
          </div>

                      
        </div>

        
      </section>

      <section className='page-four my-7 w-[1070px] mx-auto'>
        <div className='page-four-creation w-full flex flex-row justify-between'>
          <div className='four-heading'>
            <h1 id='p2' className='text-2xl w-80 text-center font-extrabold ml-6 mt-72'>
              From Creation to Monetization: Vyb Store Has It All
            </h1>
          </div>
          <div className='page-four-Card gap-5'>
            <div className='flex flex-row gap-4 '>
              <div className='card-one bg-black rounded-3xl '>
                <h1 className='text-center font-bold text-2xl pt-4'>Trusted By<br></br>Influencers</h1>
                <h2 className='text-center font-bold text-sm px-8 '>A trusted platform for influencers to<br></br>grow and earn.</h2>
                <Image
                  src={allInfuencers}
                  width={220}
                  alt='image'
                  className='img-one p-5 ml-11'
                />
              </div>
              <div className='card-one bg-black rounded-3xl'>
                <h1 className='text-center font-bold text-2xl pt-4'>Secured Data</h1>
                <h2 className='text-center font-bold text-sm px-8 '>Advanced security measures to<br></br>protect your valuable data</h2>
                <Image
                  src={Security}
                  width={220}
                  alt='image'
                  className='img-one p-5 ml-11'
                />
              </div>
            </div>  
            <div className='flex flex-row gap-5 mt-5'>
              <div className='card-one bg-black rounded-3xl'>
                <h1 className='text-center font-bold text-2xl pt-4'>Authentic Payment<br></br>Partner</h1>
                <h2 className='text-center font-bold text-sm px-8 '>Reliable fast and secure payments<br></br>you can trust</h2>
                <Image
                  src={payment}
                  width={220}
                  alt='image'
                  className='img-one p-5 ml-11'
                />
              </div>
              <div className='card-one bg-black rounded-3xl'>
                <h1 className='text-center font-bold text-2xl pt-4'>Monetize Your<br></br>Influnce</h1>
                <h2 className='text-center font-bold text-sm px-8 '>Seamlessly influence into<br></br>consistent revenue</h2>
                <Image
                  src={money}
                  width={220}
                  alt='image'
                  className='img-one p-5 ml-11'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='page-five my-7 w-[1070px] mx-auto'>
        <h1 id='p2' className='text-center text-3xl my-10 font-bold'>Our Influencers</h1>
        <div className='flex flex-row justify-between'>
          <Image
            src={poorOne}
            alt='influencers image'
            className='poor-image rounded-full '
            width={250}
          />
          <Image
            src={poorTwo}
            alt='influencers image'
            className='poor-image rounded-full'
            width={250}
          />
          <Image
            src={poorThree}
            alt='influencers image'
            className='poor-image rounded-full'
            width={250}
          />
          <Image
            src={samira}
            alt='influencers image'
            className='poor-image hide-img rounded-full'
            width={250}
          />
        </div>
      </section>

      <section className='page-six my-7 w-[1070px] mx-auto'>
        <div>
          <div>
            <h1 id='p2' className='font-bold my-5 text-center text-2xl'>How to get Started?</h1>
          </div>
          <div className='card-w-area'>
            <div id='p3' className='card-section flex flex-row rounded-3xl py-10 px-24 gap-10 mb-10'>
                <div className='card-section-heading mt-12  '>
                  <h1 className='text-2xl mb-5 font-bold'>Sign Up and create your own store hassle-free</h1>
                  <p className='text-lg'>Join us via google signin and verify your 
                    influencer status by entering your social media id
                    and unlock your store @ zero cost.
                  </p>
                </div>
                <div>
                  <Image
                    src={one}
                    alt='img one'
                    className='card-images'
                    width={480}
                  />
                </div>
            </div>

            <div id='p1' className='card-section flex flex-row rounded-3xl py-10 px-24 gap-10 mb-10 rotate-3'>
                <div className='card-section-heading mt-12  '>
                  <h1 className='text-2xl mb-5 font-bold'>
                    "Monetize your influencer status:Earn money adding real value to your true folowers!"

                  </h1>
                  <p className='text-lg'>
                    Let VYB thw money now !! its here and withdraw it periodically.
                  </p>
                </div>
                <div>
                  <Image
                    src={two}
                    alt='img one'
                    className='card-images'
                    width={480}
                  />
                </div>
            </div>

            <div id='p4' className='card-section flex flex-row rounded-3xl py-10 px-24 gap-10 -rotate-3 mb-10'>
                <div className='card-section-heading mt-12  '>
                  <h1 className='text-2xl mb-5 font-bold'>
                    Call audience to your store. Easily integrate 
                    links into content.
                  </h1>
                  <p className='text-lg'>
                    After setting up your product, its's time to go public.Put you store link in insta bio
                    and lets amke first post together!
                  </p>
                </div>
                <div>
                  <Image
                    src={three}
                    className='card-images'
                    alt='img one'
                    width={480}
                  />
                </div>
            </div>

            <div id='p5' className='card-section flex flex-row rounded-3xl py-10 px-24 gap-10 rotate-3 mb-10'>
                <div className='card-section-heading mt-12  '>
                  <h1 className='text-2xl mb-5 font-bold'>Build & customize your store front</h1>
                  <p className='text-lg'>
                    Simply fill in the details to build your digital store. Once done, start selling your product
                    to your audience.
                  </p>
                </div>
                <div>
                  <Image
                    src={four}
                    alt='img one'
                    className='card-images'
                    width={250}
                  />
                </div>
            </div>
          </div>  
        </div>
      </section>

      <section className='page-seven my-7 w-[1070px] mx-auto'>
        <div className='page-rotate flex flex-row justify-between'>
          <div className='page-seven-heading'>
            <h1 id='p2' className='text-3xl font-bold'>FREQUENTLY ASKED QUESTION</h1>
            <h3>Quick answers to questions you may have, Can't find what you're looking for?</h3>
            <p>Check out our full documentation</p>
          </div>
          <div>
            <div className='flex flex-row justify-between bg-white rounded-xl mb-5'>
              <h1 className='text-black font-bold py-2 px-4'>How much does it cost to set up a store?</h1>
              <Image
                src={plus}
                alt='fill'
                className='question-img'
                
              />
            </div>
            <div className='flex flex-row justify-between bg-white rounded-xl mb-5'>
              <h1 className='text-black font-bold py-2 px-4'>What kind of digital products can I sell?</h1>
              <Image
                src={plus}
                alt='fill'
                className='question-img'

              />
            </div>
            <div className='mb-5'>
              <div className='bg-white rounded-xl'>  
                <div className='flex flex-row justify-between'>
                  <h1 className='text-black font-bold py-2 px-4'>Do I need technical skills to use the platform?</h1>
                  <Image
                    src={mines}
                    alt='fill'
                    className='question-img'

                  />
                  
                </div>
                <p className='text-black py-2 px-4'>
                    No. not at all! Our platform is designed with user-friendliness in mind. 
                    You can easily navigate and set up your store without any technical expertise. 
                    It's as simple as a few clicks to get started!
                  </p>
              </div>  
            </div>
            <div className='flex flex-row justify-between bg-white rounded-xl mb-5'>
              <h1 className='text-black font-bold py-2 px-4'>Is there a limit to the number of products I can list?</h1>
              <Image
                src={plus}
                alt='fill'
                className='question-img'

              />
            </div>
            <div className='flex flex-row justify-between bg-white rounded-xl mb-5'>
              <h1 className='text-black font-bold py-2 px-4'>How do I receive payments for my sales?</h1>
              <Image
                src={plus}
                alt='fill'
                className='question-img'

              />
            </div>
            <div className='flex flex-row justify-between bg-white rounded-xl mb-5'>
              <h1 className='text-black font-bold py-2 px-4'>Can I sell internationally on this marketplace?</h1>
              <Image
                src={plus}
                alt='fill'
                className='question-img'

              />
            </div>
            <div className='flex flex-row justify-between bg-white rounded-xl mb-5'>
              <h1 className='text-black  font-bold py-2 px-4'>What support and resources are available for sellers?</h1>
              <Image
                src={plus}
                alt='fill'
                className='question-img'

              />
            </div>
            <div className='flex flex-row justify-between bg-white rounded-xl mb-5'>
              <h1 className='text-black font-bold py-2 px-4'>Is there a review process for uploaded products?</h1>
              <Image
                src={plus}
                alt='fill'
                className='question-img'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
