const Card = ({ heading2, image, paragraph, footer }) => {
  return (
    <div className="comp-card">
      <header>
        <div></div>
        {/* {if (heading2){<h2>{heading2}</h2>}} */}
        <footer>{footer}</footer>
      </header>
      <main>
        {/* <img src={image} /> */}
        <p>{paragraph}</p>
        <footer>{footer}</footer>
      </main>
    </div>
  );
};

export default Card;
