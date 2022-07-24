import { StarIcon } from '@heroicons/react/solid'
import faucet from '../assets/faucet.png'
import facuetIcon from '../assets/icons/faucet.svg'
import repairIcon from '../assets/icons/plumbingRepair.svg'
import toilet from '../assets/icons/toilet.svg'
import waterMeter from '../assets/icons/waterMeter.svg'
import { CheckIcon } from '@heroicons/react/outline'

const features = [
    {
      name: 'Replace Toilets',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Rebuild Toilets', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    {
      name: 'Leaky Pipe Repai',
      description: 'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    { name: 'Replace Skins', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
    { name: 'Replace Water Supply', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Replace Garbage Disposal', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
    { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  ]

const incentives = [
    {
        name: 'Leak Detection',
        imageSrc: waterMeter,
        description:
          "If any of the pipes in your home have a leak (including gas pipes), give us a call Immediately. Consider all leaks an emergency",
      },
    {
      name: 'Water Line Repair',
      imageSrc: facuetIcon,
      description: "Water's essential to life, but when you have a plumbing problem, it can kill your mood and drain your bank account",
    },
    {
      name: 'Plumbing Repair',
      imageSrc: repairIcon,
      description: "Many old houses around Manitou and Colorado Springs feature old plumbing that breaks. We fix all plumbing issues",
    },
    {
      name: 'Bathroom Plumbing',
      imageSrc: toilet,
      description:
        "Plumbing's not always glorious. If you have a bathroom issue, reach out and let us know.",
    },
    
  ]

export default function Home() {
  return (
    <div className="bg-white ">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>            
            <div className="mt-5">
            
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight sm:text-5xl">
                Plumbing Leaks?
                </h1>
                <h1 className="text-4xl font-extrabold text-sky-400 tracking-tight sm:text-5xl">No problem.</h1>
                <p className="mt-6 text-xl text-gray-500">
                After Providing more than 15 years of plumbing services to the Colorado Springs area, with a 5 star Google Rating we're proud to say COS Plumbing is your trusted plumbing company. 
                </p>
              </div>
              <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-sky-400 text-base font-medium text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:px-10"
                  >
                    Get in Touch
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">Rated 5 stars on Google</span> by over{' '}
                    <a href="https://www.google.com/search?q=cos%20plumbing&rlz=1C1CHZN_enUS921US921&oq=COS+Plumbing&aqs=chrome.0.69i59j0i512j0i22i30j0i10i22i30j0i22i30j69i60l3.1542j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=ALiCzsYLPlQTJNyGi0HR7VCxiRKvYcKVlw:1658611983263&rflfq=1&num=10&rldimm=8543743513597063908&lqi=Cgxjb3MgcGx1bWJpbmdIgpfc_ZuqgIAIWh4QABABGAAYASIMY29zIHBsdW1iaW5nKgYIAhAAEAGSAQdwbHVtYmVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJKZEZsaWRrNW5FQUWqARQQASoQIgxjb3MgcGx1bWJpbmcoAA&ved=2ahUKEwj1k9SQ-4_5AhW_lWoFHbKpDugQvS56BAgUEAE&sa=X&rlst=f#lrd=0x871347ed3335c863:0x769179757c0032e4,1,,,&rlfi=hd:;si:8543743513597063908,l,Cgxjb3MgcGx1bWJpbmdIgpfc_ZuqgIAIWh4QABABGAAYASIMY29zIHBsdW1iaW5nKgYIAhAAEAGSAQdwbHVtYmVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJKZEZsaWRrNW5FQUWqARQQASoQIgxjb3MgcGx1bWJpbmcoAA;mv:[[41.902848,-73.094334],[25.803675000000002,-82.43641099999999]];tbs:lrf:!1m4!1u17!2m2!17m1!1e2!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!2m4!1e17!4m2!17m1!1e2!3sIAE,lf:1,lf_ui:14" rel="noreferrer" target="_blank"><span className="font-medium text-sky-600">65+ Customers</span></a>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-10 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src={faucet}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-sky-400 uppercase tracking-wide">Colorado Springs & Surrounding Area
Commercial </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Plumbing Services</p>
          <p className="mt-4 text-lg text-gray-500">
          COS Plumbing is a full-service plumbing company. No matter how big or small your plumbing problem is, we've got a solution for you.
          </p>
          <p className='mt-8 text-gray-500'>
          After Providing more than 15 years of plumbing services to the Colorado Springs area, with a 5 star Google Rating we're proud to say <span className='font-bold text-sky-500'>COS Plumbing</span> is your trusted plumbing company. We have experienced technicians ready to go, because no one can foresee most plumbing problems. From routine maintenance to burst pipes, we're here to help. We're your plumber, Colorado Springs
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Residential & Commercial Plumbing
              </h2>
            </div>
            <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-4">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img className="w-16 h-16 mx-auto" src={incentive.imageSrc} alt="" />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Need a hand?</span>
          <span className="block">Request Plumbing Services.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-400 hover:bg-sky-600"
            >
             Contact Us
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="/services"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
