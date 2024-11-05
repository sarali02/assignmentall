import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    text: 'Quality of assignments at A+M',
    verified: true
  }
];

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Reviews and Trust Go Hand in Hand</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">{review.author}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
              {review.verified && (
                <div className="mt-4 text-sm text-green-600">✓ Verified Review</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}