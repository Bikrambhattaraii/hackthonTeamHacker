import React, { useState } from 'react';
import '../Styles/Form.css'; 
import Logo from "../assets/logo.png"

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  return (
    <div className="form-container">
        <img src={Logo} alt='logo'/>
      <h2>Form</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name='title'
            value={title}
            onChange={handleTitleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name='description'
            value={description}
            onChange={handleDescriptionChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="file"
            name='file'
            value={image}
            onChange={handleImageChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
