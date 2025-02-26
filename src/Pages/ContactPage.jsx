import React, { useState, useEffect } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setSubmittedData(formData);
    alert("Form submitted and saved locally!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-100 dark:bg-black">
      <div className="bg-white text-gray-900 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
