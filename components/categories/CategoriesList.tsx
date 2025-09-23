import CategoryBox from "../ui/CategoryBox";

const categories = [
  {
    name: "Accessórios",
    image: "/categories/accessories-category.png",
  },
  {
    name: "Ipads",
    image: "/categories/ipads-category.png",
  },
  ,
  {
    name: "Laptops",
    image: "/categories/laptops-category.png",
  },
  ,
  {
    name: "Phones",
    image: "/categories/phones-category.png",
  },
  {
    name: "TV & Home",
    image: "/categories/tv-home-category.png",
  },
  {
    name: "Watches",
    image: "/categories/watches-category.png",
  },
];
export default function CategoriesList() {
  return (
    <div>
      <div className="grid-cols-3 grid gap-[3rem] mt-[3rem]">
        {categories.map((category, i) => (
          <CategoryBox key={i} category={category} />
        ))}
      </div>
    </div>
  );
}
