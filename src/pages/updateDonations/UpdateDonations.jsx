import { useState } from "react";

const UpdateDonations = ({ donation, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: donation.title,
    deadline: donation.deadline,
    location: donation.location,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.deadline || !formData.location) {
      setError("All fields are required.");
      return;
    }

    // Clear any previous error
    setError(null);

    // Pass the updated data to the parent
    onUpdate(formData);
    onClose(); // Close the modal after update
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-xl font-semibold mb-4">Update Campaign</h3>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
              aria-label="Campaign Title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deadline" className="block">Deadline</label>
            <input
              type="date"
              name="deadline"
              id="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
              aria-label="Campaign Deadline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
              aria-label="Campaign Location"
            />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDonations;
