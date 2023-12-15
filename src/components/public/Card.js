import React from "react";

export const Card = ({ mascota }) => {
  return (
    <div>
      <div class="card shadow-sm">
        <img width="100%" src={mascota.image} alt="image"></img>

        <strong style={{ marginLeft: '1rem', marginTop: '1rem' }} className="d-inline-block mb-2 text-success"> {mascota.species} </strong>

        <h3 style={{ marginLeft: '1rem' }} className="card-text">{mascota.name}</h3>

        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small class="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};
