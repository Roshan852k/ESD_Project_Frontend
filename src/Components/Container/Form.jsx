import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import useSubmitForm from "../../hooks/useSubmitForm";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    course_code: "",
    name: "",
    description: "",
    specialization: "",
    credit: "",
    capacity: "",
    faculty: "",
    pre_requisites: "",
    day: "",
    location: "",
    time: "",
    year: "",
    term: "",
  });

  const { data: specializations, loading: loadingSpecializations } = useFetchData("/api/specialization");
  const { data: preRequisites, loading: loadingPreRequisites } = useFetchData("/api/coursename");
  const { submitForm, loading: submitting, successMessage, errorMessage } = useSubmitForm("/api/add/course");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [
    "08:00 AM - 09:30 AM",
    "09:30 AM - 11:00 AM",
    "11:30 AM - 01:00 PM",
    "01:30 PM - 03:30 PM",
    "03:30 PM - 05:00 PM"
  ];
  const terms = ["term 1", "term 2"];
  const years = ["2024"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData, () => {
      console.log("Form submission successful, resetting form...");
      setFormData({
        course_code: "",
        name: "",
        description: "",
        specialization: "",
        credit: "",
        capacity: "",
        faculty: "",
        pre_requisites: "",
        day: "",
        location: "",
        time: "",
        year: "",
        term: "",
      });
    });
  };

  if (loadingSpecializations || loadingPreRequisites) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">New Course Form</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course Code</label>
          <input
            type="text"
            name="course_code"
            className="form-control"
            value={formData.course_code}
            onChange={handleChange}
            placeholder="Enter Course Code"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Course Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Course Description"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Specialization</label>
          <select
            name="specialization"
            className="form-select"
            value={formData.specialization}
            onChange={handleChange}
            required
          >
            <option value="">Select Specialization</option>
            {specializations.map((spec, index) => (
              <option key={index} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Credits</label>
          <input
            type="number"
            name="credit"
            className="form-control"
            value={formData.credit}
            onChange={handleChange}
            placeholder="Enter Number of Credits"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input
            type="number"
            name="capacity"
            className="form-control"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="Enter Capacity"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Faculty Name</label>
          <input
            type="text"
            name="faculty"
            className="form-control"
            value={formData.faculty}
            onChange={handleChange}
            placeholder="Enter Faculty Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pre-requisites</label>
          <select
            name="pre_requisites"
            className="form-select"
            value={formData.pre_requisites}
            onChange={handleChange}
            required
          >
            <option value="">Select Pre-requisite</option>
            {preRequisites.map((req, index) => (
              <option key={index} value={req}>
                {req}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Day</label>
          <select
            name="day"
            className="form-select"
            value={formData.day}
            onChange={handleChange}
            required
          >
            <option value="">Select Day</option>
            {days.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter Location"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Time</label>
          <select
            name="time"
            className="form-select"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <select
            name="year"
            className="form-select"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Term</label>
          <select
            name="term"
            className="form-select"
            value={formData.term}
            onChange={handleChange}
            required
          >
            <option value="">Select Term</option>
            {terms.map((term, index) => (
              <option key={index} value={term}>
                {term}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
