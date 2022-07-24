/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon, CashIcon, ChatIcon, ClipboardCheckIcon, StarIcon } from '@heroicons/react/solid'
import Residential from '../assets/residential.png'
import Commercial from '../assets/commercial.jpg'

const transferFeatures = [
  {
    id: 1,
    name: 'Exceptional Customer Service',
    description:
      "From our uniform to our protective shoe coverings, we are dedicated to exceptional customer service. From the moment you call us to schedule a service to the moment we leave your home",
    icon: ChatIcon,
  },
  {
    id: 2,
    name: 'No Hidden Fees',
    description:
      'We make sure you know exactly what you are paying for ahead of time. Thanks to our upfront, flat rate pricing model, you can rest assured.',
    icon: CashIcon,
  },
  {
    id: 3,
    name: 'Locally Owned and Opperated',
    description:
      'COS Plumbing is proud to be a trusted company in Colorado Springs, and always strive to uphold that reputation and respect by delivering superior quality plumbing services.',
    icon: LightningBoltIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Licensed & Insured',
    description:
      'When it comes to your plumbing, quality is key. One of the best ways to ensure you get the quality you are looking for is hiring a true expert. ',
    icon: BadgeCheckIcon,
  },
  {
    id: 2,
    name: 'Proffesional Workmanship',
    description:
      'When it comes to finding a plumber for your business, you want to know that they stand behind their work and get the job done right—the first time.',
    icon: ClipboardCheckIcon,
  },
]



export default function Services() {
  return (
    <div className="relative overflow-hidden">
      

      <div className="relative pt-6 pb-16 sm:pb-24">
       

        <main className=" mx-auto max-w-7xl px-4 sm:mt-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Colorado Springs</span>{' '}
              <span className="block text-sky-400 xl:inline">Plumbing Services</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-7xl">
            COS Plumbing offers Residential and Commercial Plumbing services around the Colorado Springs and surrounding area. We strive for 100% customer satisfaction and want to hear about your plumbing experience with us! Leave a Review Here or Click the Image Above.
            </p>
            <div className="mt-5 max-w-ld mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#residential"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-600 md:py-4 md:text-lg md:px-10"
                >
                  Residential Plumbing
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#commercial"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-nuetral-900 bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10"
                >
                  Commercial Plumbing
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by the Residents of Colorado Springs
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 " />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Reliable</dt>
                  <dd className="order-1 text-5xl font-extrabold text-sky-400">100%</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Service Request</dt>
                  <dd className="order-1 text-5xl font-extrabold text-sky-400">24/7</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"><StarIcon className='h-5 inline-block mb-1 text-yellow-500'/><StarIcon className='h-5 text-yellow-500 inline-block mb-1'/><StarIcon className='h-5 text-yellow-500 inline-block mb-1'/><StarIcon className='h-5 text-yellow-500 inline-block mb-1'/><StarIcon className='h-5 inline-block mb-1 text-yellow-500'/> Reviews</dt>
                  <dd className="order-1 text-5xl font-extrabold text-sky-400">71+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

          <div className="py-16  overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>
        

        <div className="relative mt-2 lg:mt-2 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative" id="residential">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl" >
              Resedential Services
            </h3>
            <p className="mt-3 text-lg text-gray-500">
            COS Plumbing is the go-to plumber for homeowners across Colorado Springs. Why? We provide courteous, friendly, affordable, and effective residential plumbing services. We take our mission to exceed our customers’ expectations seriously! From on-time arrivals to licensed and certified plumbing experts, we make sure homeowners are getting the very best plumbing services. You can have total peace of mind and confidence when you call on us! We stand behind our work and go the extra mile to get the job done quickly so you can get back to enjoying your home.</p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src={Residential}
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2" id="commercial">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Commercial Services</h3>
              <p className="mt-3 text-lg text-gray-500">
              Plumbing problems can be disastrous for commercial locations. Something as simple as a leak or a clogged pipe can slow or even close your business, not to mention undesirably impact your customers and workers.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-400 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src={Commercial}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
          
        </main>
        
      </div>
    </div>
  )
}
