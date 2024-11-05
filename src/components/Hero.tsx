import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Get Assignment Help From Top Experts
            </h1>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-blue-600">98.2%</span>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-blue-600">9/10</span>
                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>
              </div>
            </div>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Get Assignment Help Instantly</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <textarea
                  placeholder="Assignment Details"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Get Free Quote
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-500 flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                Your information is secure and encrypted
              </div>
            </form>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
              <img
                src="/images/students.jpg"
                alt="Students getting help with assignments"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}