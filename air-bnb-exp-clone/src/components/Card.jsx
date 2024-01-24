import PropTypes from "prop-types";
function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`./dist/images/${props.item.coverImg}`}
        className="card--image"
      />
      <div className="card--stats">
        <img src="./dist/images/star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    openSpots: PropTypes.number,
    location: PropTypes.string,
    coverImg: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    stats: PropTypes.shape({
      rating: PropTypes.number,
      reviewCount: PropTypes.number,
    }),
  }),
};
export default Card;
