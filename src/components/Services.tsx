export default function Services() {
  const services = [
    {
      title: "Assignment Help Services",
      description: "Professional assistance with all types of academic assignments",
      stats: [
        { value: "3 Hours", label: "Minimum Delivery Time" },
        { value: "90%", label: "Success Rate" },
        { value: "400", label: "Active Writers" },
        { value: "4.9", label: "Customer Rating" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Assignment Help Services</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-8">
            Our assignment help service is designed to assist students with their academic needs. 
            We provide high-quality, plagiarism-free work delivered by expert writers.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mt-8">
          {services[0].stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}