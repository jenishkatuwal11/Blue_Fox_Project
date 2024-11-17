import PropTypes from "prop-types";

const Review = ({ darkMode }) => {
  // Dummy data for reviews
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "Nov 16, 2024",
      comment:
        "This property exceeded my expectations! The amenities are fantastic, and the view is breathtaking.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      date: "Nov 14, 2024",
      comment:
        "The property is great overall, but I found the parking space slightly limited.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Alex Johnson",
      rating: 5,
      date: "Nov 12, 2024",
      comment:
        "Excellent property with a great location. The staff was friendly and helpful throughout.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Emily Carter",
      rating: 3,
      date: "Nov 10, 2024",
      comment:
        "The property is decent, but I expected more facilities for the price.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Michael Brown",
      rating: 4,
      date: "Nov 9, 2024",
      comment:
        "The neighborhood is amazing, and the property is well-maintained.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 6,
      name: "Sophia Wilson",
      rating: 5,
      date: "Nov 8, 2024",
      comment:
        "Beautiful property with top-notch facilities. Highly recommend it!",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 7,
      name: "William Davis",
      rating: 3,
      date: "Nov 7, 2024",
      comment:
        "The property is good but requires better maintenance in some areas.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      rating: 5,
      date: "Nov 6, 2024",
      comment: "A fantastic place to live! Everything is exactly as described.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 9,
      name: "James Anderson",
      rating: 4,
      date: "Nov 5, 2024",
      comment:
        "Great property with good facilities, but the parking space could be improved.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 10,
      name: "Isabella Harris",
      rating: 5,
      date: "Nov 4, 2024",
      comment:
        "One of the best properties I've ever stayed in. Excellent amenities and location.",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  // Render stars for the rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating
            ? darkMode
              ? "text-yellow-400"
              : "text-yellow-500"
            : darkMode
            ? "text-gray-600"
            : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className={`max-w-5xl mx-auto p-8 rounded-lg shadow-lg mt-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-extrabold mb-6">Reviews</h2>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`flex items-start space-x-4 p-6 rounded-lg transition-transform transform hover:scale-105 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {/* Avatar */}
            <img
              src={review.avatar}
              alt={review.name}
              className="w-14 h-14 rounded-full shadow-md"
            />

            {/* Review Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                {/* Name and Rating */}
                <div>
                  <h4 className="text-lg font-bold">{review.name}</h4>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Date */}
                <span
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {review.date}
                </span>
              </div>

              {/* Comment */}
              <p
                className={`text-base ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Review.propTypes = {
  darkMode: PropTypes.bool,
};

export default Review;
