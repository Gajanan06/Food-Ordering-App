const Shimmer = () => {

  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center">

      {Array(10).fill("").map((_, index) => (
        <div key={index} className="w-[200px] h-[275px] bg-gray-300 rounded-lg animate-pulse"></div>
      ))}

    </div>
  );

};

export default Shimmer;
