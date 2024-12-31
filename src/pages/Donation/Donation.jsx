import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Donation = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    formName: "",
    email: "",
    location: "",
    Donation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.formName || !formData.email || !formData.location || !formData.Donation) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required.",
      });
      return;
    }

    // Validate donation amount
    const donationAmount = parseFloat(formData.Donation);
    if (isNaN(donationAmount) || donationAmount <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Donation Amount",
        text: "Donation amount should be a positive number greater than zero.",
      });
      return;
    }

    // Set submitting state to true while processing
    setIsSubmitting(true);

    // Submit donation data to the backend
    fetch(`${import.meta.env.VITE_BASE_URL}/donation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        userId: user._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Donation Successful!",
          text: "Thank you for your donation.",
        });

        // Reset form data after successful submission
        setFormData({
          formName: "",
          email: "",
          location: "",
          Donation: "",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Donation Failed",
          text: "Something went wrong. Please try again later.",
        });
      })
      .finally(() => {
    
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Make a Donation</h2>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="formName"
              value={formData.formName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter your location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Donation Amount (Taka)</label>
            <input
              type="number"
              name="Donation"
              value={formData.Donation}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
              placeholder="Enter donation amount"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            disabled={isSubmitting} 
          >
            {isSubmitting ? "Processing..." : "Donate"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donation;
