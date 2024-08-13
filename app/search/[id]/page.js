"use client";
import { useEffect, useState } from "react";

const SearchedDetailPage = ({ params }) => {
  const { id } = params; // Correctly destructure the id from params

  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the details of the item based on the ID
      // This could be an API call or fetching from a database
      const fetchDetails = async () => {
        // Replace with your actual data fetching logic
        const mockData = {
          1: {
            title: "Result 1",
            description: "This is the detail of Result 1.",
          },
          2: {
            title: "Result 2",
            description: "This is the detail of Result 2.",
          },
          3: {
            title: "Result 3",
            description: "This is the detail of Result 3.",
          },
        };

        setDetails(mockData[id]);
      };

      fetchDetails();
    }
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">{details.title}</h1>
      <p className="mt-4 text-gray-600">{details.description}</p>
    </div>
  );
};

export default SearchedDetailPage;
