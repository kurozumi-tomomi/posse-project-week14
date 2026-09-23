// src/components/BookCard.jsx
function BookCard({ title, author, rating, comment }) {
  const stars = '★'.repeat(rating);

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:scale-105 transition">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-500 text-sm">著者: {author}</p>
      <p className="text-yellow-500">{stars}</p>
      <p className="text-gray-600 mt-2">{comment}</p>
    </div>
  );
}

export default BookCard;
