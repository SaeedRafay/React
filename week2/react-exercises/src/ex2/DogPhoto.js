function DogPhoto(props) {
  const { dogPhoto } = props;
  return (
    <div className="dogPhoto">
      <img src={dogPhoto} alt="" style={{ "max-width": "500px" }} />
    </div>
  );
}

export default DogPhoto;
