import Guarantee from "./Guarantee";
import './Guarantees.css';

function Guarantees() {
  const guarantees = [
    {
      img: "f-delivery.png",
      title: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur quam non suscipit aliquet.",
    },
    {
      img: "coin.png",
      title: "100% Money Back",
      description:
        "In facilisis tincidunt turpis ut volutpat. Cras non tempor velit.",
    },
    {
      img: "chat.png",
      title: "Online Support 24/7",
      description:
        "Vivamus facilisis varius purus ac molestie. Praesent sodales magna mattis scelerisque posuere.",
    },
  ];
  return (
    <div className="Guarantees">
      {guarantees.map((guarantee, index) => (
        <Guarantee
          key={index}
          img={guarantee.img}
          title={guarantee.title}
          description={guarantee.description}
        />
      ))}
    </div>
  );
}

export default Guarantees;
