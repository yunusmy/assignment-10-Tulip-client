import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCampaign = () => {
  const [Donations, setDonations] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/all/campaigns`)
      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((error) => console.error("Error fetching marathons:", error));
  }, []);

  const handleSort = () => {
    const sortedDonations = [...Donations].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.minDonation - b.minDonation;
      } else {
        return b.minDonation - a.minDonation;
      }
    });
    setDonations(sortedDonations);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Running Donation Campaigns</h2>
        <button
          className="btn"
          onClick={handleSort}
        >
          Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {Donations.map((Donation) => (
          <div key={Donation._id} className="card bg-base-100 shadow-md p-4">
            <div>
              <img
                src={Donation.image}
                alt={Donation.title}
                className="w-full h-48 object-cover mb-1"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{Donation.title}</h3>
            <p className="text-sm text-gray-600 py-1">{Donation.description}</p>
            <p className="text-sm text-gray-600">Division: {Donation.location}</p>
            <p className="text-sm">Minimum Donation: ${Donation.minDonation}</p>
            <p className="text-sm mt-2">Deadline: {Donation.deadline}</p>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate(`/details/campaign/${Donation._id}`)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCampaign;
