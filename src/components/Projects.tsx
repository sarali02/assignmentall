export default function Projects() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Recent Completed Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-700 p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">3 min</div>
            <p>Average response time</p>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">98.3%</div>
            <p>Success rate</p>
          </div>
          <div className="bg-blue-700 p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">4.9</div>
            <p>Average rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}