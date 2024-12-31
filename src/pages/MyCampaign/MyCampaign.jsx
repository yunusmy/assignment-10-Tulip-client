import { useState, useEffect } from "react";
import Swal from "sweetalert2"; 
import UpdateDonations from "../updateDonations/updateDonations";


const MyCampaign = ({ user }) => {
  const [donations, setDonations] = useState([]); 
  const [selectedDonation, setSelectedDonation] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/all/campaigns`) 
      .then((res) => res.json())
      .then((data) => {
        setDonations(data); 
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch campaigns.");
        setLoading(false);
      });
  }, [user]);

  const handleUpdate = (updatedData) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/all/campaigns/${selectedDonation._id}`, { 
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success", "Campaign updated successfully!", "success");
        setDonations((prev) =>
          prev.map((donation) =>
            donation._id === selectedDonation._id
              ? { ...donation, ...updatedData }
              : donation
          )
        );
        setSelectedDonation(null);
      })
      .catch(() => Swal.fire("Error", "Failed to update campaign.", "error"));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_BASE_URL}/all/campaigns/${id}`, { 
          method: "DELETE",
        })
          .then(() => {
            Swal.fire("Deleted!", "Campaign deleted successfully.", "success");
            setDonations((prev) => prev.filter((donation) => donation._id !== id));
          })
          .catch(() => Swal.fire("Error", "Failed to delete campaign.", "error"));
      }
    });
  };

  if (loading) {
    return <div className="text-center py-8">Loading donations...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Campaigns</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Deadline</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => ( 
              <tr key={donation._id}>
                <td className="border px-4 py-2">{donation.title}</td>
                <td className="border px-4 py-2">{donation.deadline}</td>
                <td className="border px-4 py-2">{donation.location}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => setSelectedDonation(donation)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(donation._id)} 
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedDonation && ( 
        <UpdateDonations
          donation={selectedDonation}
          onClose={() => setSelectedDonation(null)} 
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default MyCampaign;
