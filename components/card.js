import Icon from "./Icons/fb";
const Card = ({ image, paragraph, footer }) => {
  return (
    <div className="card">
      <img src={image} />
      <p>{paragraph}</p>
      <footer>
        {footer} <Icon name="arrow" />
      </footer>
    </div>
  );
};

export default Card;
