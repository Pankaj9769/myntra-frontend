import { StarFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Rating = ({ count = 0 }) => {
  const [rate, setRate] = useState(count);
  console.log(count);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <StarFilledIcon
      key={i}
      className={`w-6 h-6 ${
        rate <= i ? "text-gray-400" : "text-red-500"
      } hover:text-gray-600`}
      onClick={() => {
        setRate(i + 1);
      }}
    />
  ));

  return <>{stars}</>;
};

export default Rating;
