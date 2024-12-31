import { Link, useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
  const campaign = useLoaderData(); 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md flex flex-col md:flex-row gap-4 rounded-lg p-6">
        {/* Left Section */}
        <div className="md:w-6/12 w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {campaign.title}
          </h2>
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-4 text-gray-700 md:w-6/12 w-full flex flex-col justify-center items-center">
          <p className="text-lg">
            <span className="font-semibold">Description:</span>{" "}
            {campaign.description}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Division:</span> {campaign.location}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Deadline:</span> {campaign.deadline}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Minimum Donation:</span> $
            {campaign.minDonation}
          </p>

          <div className="mt-6">
            <Link to={`/donation/${campaign._id}`}>
              <button
                className="btn btn-primary px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
