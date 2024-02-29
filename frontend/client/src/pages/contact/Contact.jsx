import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5 vh-100">
      <h2 className="mb-3">Create your account here</h2>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control form-control-sm" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control form-control-sm" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control form-control-sm" id="message" required />
        </div>
        <img src="https://img.freepik.com/premium-photo/succulents-cactus-plants-white-pots-background_176841-39504.jpg" alt="cactus" style={{ width: '100%', maxHeight: '350px' }} />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
