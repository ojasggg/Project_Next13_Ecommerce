import ProductCard from "../Card/ProductCard";

interface propsType {
  heading: string;
  itemCategories?: string[];
}

const ProductList = ({ heading, itemCategories }: propsType) => {
  return (
    <section className="mx-auto w-[90vw] bg-white p-6">
      <div className="flex items-center justify-between border-b border-gray-300 pb-2">
        <h1 className="text-xl">{heading}</h1>
        <ul className="flex gap-4 text-sm text-gray-600">
          {itemCategories?.map((category) => (
            <li className={` cursor-pointer`} key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid divide-x divide-gray-300 overflow-hidden pt-10 lg:h-[300px] lg:grid-cols-6 xl:h-[360px] xl:grid-cols-7">
        {[...Array(7)].map((num) => (
          <ProductCard key={num} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
