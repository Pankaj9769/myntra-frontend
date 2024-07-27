const Empty = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <img src="./images/empty1.png" className="h-80" />
        <span className="inline-block w-full text-center text-3xl font-semibold text-gray-500">
          Oops! No Item Found
        </span>
      </div>
    </>
  );
};
export default Empty;
