import  { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    location:"",
    minDonation: "",
    deadline: "",
    image: "",
    email: user?.email || "",
    name: user?.name || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the deadline is a future date
    const deadlineDate = new Date(formData.deadline);
    if (deadlineDate <= new Date()) {
      Swal.fire({
        icon: "error",
        title: "Invalid Deadline",
        text: "The deadline must be a future date.",
      });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/campaigns`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Campaign Added",
          text: "Your campaign has been successfully added!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          title: "",
          type: "",
          description: "",
          location: "",
          minDonation: "",
          deadline: "",
          image: "",
          email: user?.email || "",
          name: user?.name || "",
        });
      } else {
        throw new Error("Failed to add campaign.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Add Campaign",
        text: error.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="add-campaign-page min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Add New Campaign</h1>
      <div className="card bg-white shadow-lg max-w-lg mx-auto p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label font-semibold">Campaign Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Campaign Type</label>
            <select
              name="type"
              className="select select-bordered"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="personal">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative">Creative Ideas</option>
            </select>
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Location</label>
            <input
              name="location"
              className="input input-bordered"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Minimum Donation Amount</label>
            <input
              type="number"
              name="minDonation"
              className="input input-bordered"
              value={formData.minDonation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Deadline</label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              className="input input-bordered"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">User Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              value={formData.email}
              readOnly
            />
          </div>
          <div className="form-control mb-4">
            <label className="label font-semibold">User Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Add Campaign</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;
