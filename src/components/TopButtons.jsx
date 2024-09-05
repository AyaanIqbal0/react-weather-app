const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: "Varanasi" },
    { id: 2, name: "Delhi" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Tokyo" },
    { id: 5, name: "London" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in m-1"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
