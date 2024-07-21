const ExchangeWindow = ({ isClosed, closesOn }) => {
  return (
    <>
      <div className="bg-white mt-2 py-4 px-6 flex flex-row gap-2 items-center">
        {isClosed ? (
          <>
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full text-left"></span>
            <span className="text-gray-500 text-sm">
              Exchange/Return window closed on {closesOn}
            </span>
          </>
        ) : (
          <>
            <span className="inline-block w-2 h-2 bg-[#03A685] rounded-full text-left"></span>
            <span className="text-gray-500 text-sm">
              Exchange/Return window closes on {closesOn}
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default ExchangeWindow;
