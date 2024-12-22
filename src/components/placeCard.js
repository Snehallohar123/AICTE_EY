import React from "react";
import "./PlaceCard.css";

const PlaceCard = ({ place, toggleWishlist, isLiked }) => (
  <div className="place-card">
    <img src={place.image} alt={place.name} />
    <h3>{place.name}</h3>
    <button onClick={() => toggleWishlist(place.id)}>
      {isLiked ? "❤️" : "🤍"}
    </button>
  </div>
);

export default PlaceCard;
