import { useEffect, useState } from "react";

const MyDonations = ({ user }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user-specific registrations
    fetch(`${import.meta.env.VITE_BASE_URL}/donations`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch registrations.");
        setLoading(false);
      });
  }, [user]);
  console.log(donations)

  if (loading) {
    return <div className="text-center py-8">Loading registrations...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  if (donations.length === 0) {
    return <div className="text-center py-8">No donations found.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Donations</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Donation Amount (Taka)
              </th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td className="border px-4 py-2">{donation.formName || "N/A"}</td>
                <td className="border px-4 py-2">{donation.email || "N/A"}</td>
                <td className="border px-4 py-2">
                  {donation.location}
                </td>
                <td className="border px-4 py-2">${donation.Donation || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonations;
