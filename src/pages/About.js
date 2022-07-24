/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from '@heroicons/react/solid'
import { CheckIcon } from '@heroicons/react/outline'
import PlumbingImage from '../assets/residential.jpg'

const pricing = {
    tiers: [
      {
        title: 'Plumbing',
        description: "We've seen every kind of fixture known to man, and we've help install them, too.",
        features: ['Kitchen and bath fictures', 'Counter Tops', 'Faucets Residential and Commercial', 'Food Waste Disposers', 'Toilets Residential and Commecrial', 'Water Heaters Gas and Electric'],
        cta: 'Contact Us',
        mostPopular: false,
      },
      {
        title: 'Sewer and Drain',
        price: 32,
        frequency: '/month',
        description: "No matter what kind of water you have running from one place to another, we're experts",
        features: [
          'Main Line Stoppages',
          'Drain Stoppages',
          'Roof Drains',
          '2Clean Outs Installed',
        ],
        cta: 'Contact Us',
        mostPopular: false,
      },
      {
        title: 'Conventional Trenchless Technologies',
        price: 48,
        frequency: '/month',
        description: "For big jobs, we've got everything you need to get them up and running.",
        features: [
          'Sump Pumps',
          'Ejector Pumps',
          'Lawn and Area Drains',
          'Floor Drains',
          'Smoke Testing Odor Location',
          'Pipe, Septic Tank Location',
        ],
        cta: 'Monthly billing',
        mostPopular: false,
      },
      {
        title: 'Professional Plumbing Service',
        price: 48,
        frequency: '/month',
        description: 'COS Plumbing is your plumbing solution for all proffesional needs',
        features: [
          'Water Heaters',
          'Solar Systems',
          'Gas Company Red Tag',
          'Gas Space Heaters',
        ],
        cta: 'Monthly billing',
        mostPopular: false,
      },
    ],
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



export default function About() {
    return (
        <div className="max-w-full mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl text-center">
          About our Services
        </h2>
        <p className="mt-6  text-xl text-gray-500 text-center">
          Sometimes a job requires something new, something different, and something totally unique
        </p>
  
        {/* Tiers */}
        <div className="mt-14 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8 text-center ">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative p-8 bg-white border border-sky-500 rounded-2xl shadow-lg flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.icon}</h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4   text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.title}</span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>
  
                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon className="flex-shrink-0 w-6 h-6 text-sky-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>  
            </div>
          ))}
        </div>
        <div className="mt-14 relative bg-gray-800 rounded-2xl">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={PlumbingImage}
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Locally Owned</h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
          <p className="mt-3 text-lg text-gray-300">
          In addition to plumbing, we also offer a full fabrication service. Most often, we produce pieces to fit outdated, no-longer-produced sizes of pipes.
          </p>
          <p className="mt-3 text-2xl font-extrabold text-gray-100">
          (719) 640-4875
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Request Services
                <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        
      </div>
    
    )
}
