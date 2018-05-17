import React from "react";
import ActionsLoad from './partials/ActionsLoadBar'

export default ({ color = "has-background-success", title = "Componente", text = "texto" }) => (
  <div className={`card column is-one-fifth ${color}`}>
    <header className="card-header">
      <p className="card-header-title is-centered">{title}</p>
    </header>
    <div className="card-content">
      <div className="content is-centered is-flex">
        {text}
      </div>
    </div>
    <ActionsLoad />
  </div>
);
