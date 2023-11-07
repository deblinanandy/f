import React, { useState } from 'react';
import axios from 'axios';
import './adminLoginForm.css';
const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    releaseDate: new Date().toISOString(),
    postUrl: '',
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/api/addMovie', formData);
      console.log('Movie added:', response.data);
      // You can add further logic, like displaying a success message or redirecting the user.
    } catch (error) {
      console.error('Error adding movie:', error);
      // Handle the error here, display an error message, etc.
    }
  };

  return (
    <div className="add-movie-container">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Post URL</label>
          <input
            type="url"
            name="postUrl"
            value={formData.postUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Featured</label>
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
