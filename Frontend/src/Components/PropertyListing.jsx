const properties = [
  {
    id: 1,
    title: "New York City",
    image: "/assets/nyc.jpg",
    listing: 3,
  },
  {
    id: 2,
    title: "Los Angeles",
    image: "/assets/la.jpg",
    listing: 4,
  },
  {
    id: 3,
    title: "Singapore",
    image: "/assets/singapore.jpg",
    listing: 5,
  },
  // Add other property items
];

const PropertyListing = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center">Explore Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="h-48 w-full object-cover"
              src={property.image}
              alt={property.title}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p>Listing: {property.listing}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListing;
