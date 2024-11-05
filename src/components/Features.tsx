import { AcademicCapIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Expert Writers',
    description: 'Professional academic writers with proven expertise',
    icon: AcademicCapIcon,
  },
  {
    name: 'Fast Delivery',
    description: 'Quick turnaround time for urgent assignments',
    icon: ClockIcon,
  },
  {
    name: 'Affordable Prices',
    description: 'Competitive pricing with student discounts',
    icon: CurrencyDollarIcon,
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why students prefer last minute assistance with assignments from us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}