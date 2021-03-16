function Guarantee(props) {
  const {img, title, description} = props;
  return (
    <div className="Guarantee">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee;
