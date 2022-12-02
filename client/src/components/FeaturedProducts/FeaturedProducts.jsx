import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://www.gotceleb.com/wp-content/uploads/photos/joan-smalls/impromptu-photoshoot-in-nyc/Joan-Smalls:-Impromptu-Photoshoot--12.jpg",
      img2: "https://www.hawtcelebs.com/wp-content/uploads/2015/06/joan-smalls-at-impromptu-photoshoot-in-new-york_5.jpg",
      title: "Long Sleeve Graphic t-short",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/92/b9/bf/92b9bfecaa9aa3818457ac132da7e278.jpg",
      img2: "https://i.pinimg.com/originals/aa/26/f7/aa26f722b4b6da712960ea38ce83355e.jpg",
      title: "Long Sleeve Graphic t-short",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/bd/61/5d/bd615d684db44788f0e6adae59558bc1.jpg",
      img2: "https://i.pinimg.com/originals/4f/c1/54/4fc154633b25ca5dd2f5a45fda0b88a7.jpg",
      title: "Long Sleeve Graphic t-short",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/originals/3a/fd/3a/3afd3a39f08bbfa1a6b3ecf0f9e8db25.jpg",
      img2: "https://i.pinimg.com/originals/e2/0d/d5/e20dd5e815cc66ad4593712e91c1ca0a.jpg",
      title: "Long Sleeve Graphic t-short",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="container">
        <div className="top">
          <h1>{type} products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum,
            harum, fugiat nesciunt at mollitia nulla est nobis, distinctio
            perspiciatis blanditiis facilis veritatis consequuntur quaerat
            repudiandae beatae cum quibusdam quia eos sequi! Obcaecati eaque
            deleniti delectus alias eum? Quas, asperiores!
          </p>
        </div>
        <div className="bottom">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts