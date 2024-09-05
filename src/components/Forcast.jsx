const Forecast = ({ title, data }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mb-4"
          >
            <p className="font-light text-sm text-center">{d.title}</p>
            <img
              src={d.icon}
              alt="weather icon"
              className="w-12 my-1"
            />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
