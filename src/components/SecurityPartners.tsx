export default function SecurityPartners() {
  const partners = [
    'PayPal',
    'Norton',
    'McAfee',
    'Visa',
    'Mastercard'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Security Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner} className="grayscale hover:grayscale-0 transition-all">
              <img
                src={`/logos/${partner.toLowerCase()}.png`}
                alt={partner}
                className="h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}