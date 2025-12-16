import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'


export default function Faq() {
 
  const faq = [
    {
      q: "What is pest control?",
      a: "Pest control refers to the management of pests that can damage property, spread diseases, or create hygiene issues. Our experts inspect, identify pests, and apply targeted treatments."
    },
    {
      q: "How often should I schedule pest control services?",
      a: "For prevention, quarterly visits are sufficient. For heavy infestations, we recommend monthly or bi-monthly follow-ups until fully controlled."
    },
    {
      q: "Is pest control safe for my family and pets?",
      a: "Yes, we use eco-friendly products approved for residential use. Follow any simple safety instructions the technician gives you for best results."
    },
    {
      q: "How long does it take for pest control treatments to work?",
      a: "Common pests reduce in 24–72 hours. Termites, bed bugs, and severe infestations may require multiple sessions over a few weeks."
    },
    {
      q: "What should I do to prepare for a pest control visit?",
      a: "Clear clutter, clean surfaces, and secure food items. For specific pests, we may provide additional prep instructions during scheduling."
    },
    {
      q: "Do you offer guarantees on your pest control services?",
      a: "Yes, we provide guarantees on many treatments. If pests return within the guarantee period, we will re-treat at no extra cost."
    },
  ]
  return (
    <section className="px-4 py-16 md:py-24">

      {/* Header */}

      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900"


      >
        Common Questions About Our <br />
        <span className="text-emerald-600">Pest Control Services</span>
      </h2>

      <p className="mt-4 text-center max-w-2xl mx-auto text-sm text-gray-600">
        Everything you need to know before booking — quick answers from our experts.
      </p>

      {/* FAQ List */}
      <div className="mx-auto mt-10 w-full max-w-7xl divide-y divide-white/5 rounded-xl bg-emerald-50 shadow-sm border border-emerald-200">

        {faq.map((faq, index) => (
          <Disclosure key={index} as="div" className="p-6 md:p-8 border-emerald-200">
            {({ open }) => (
              <>
                <Disclosure.Button className="group flex w-full items-center justify-between">
                  <span className="text-xl md:text-2xl font-bold text-emerald-700">
                    {faq.q}
                  </span>

                  <ChevronDownIcon
                    className={`h-6 w-6 fill-[#1e1a3d] transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="mt-6 ml-2 text-gray-700 font-medium leading-relaxed">
                  {faq.a}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}

      </div>

      {/* CTA BUTTON */}
      <div className="mt-8 text-center">
        <a href="#quote">

          <button

            className="inline-block rounded-lg px-6 py-3 text-sm font-semibold bg-[#299B46] text-white hover:bg-[#1e1a3d] transition"
          >
            Still have a question? Contact us
          </button>
        </a>
      </div>

    </section>
  );
}
