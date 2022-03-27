import React from 'react';

export default function Login() {
  return (
    <form className="container mt-5 p-5">
      <div className="form-outline mb-4">
        <label htmlFor="form-label" htmlFor="form2Example1">
          username
        </label>
        <input type="text" id="form2Example1" className="form-control" />
      </div>

      <div className="form-outline mb-4">
        <label htmlFor="form-label" htmlFor="form2Example2">
          Password
        </label>
        <input type="password" id="form2Example2" className="form-control" />
      </div>
      <button type="button" className="btn btn-primary btn-block mb-4 w-100">
        Sign in
      </button>
    </form>
  );
}
