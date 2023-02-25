import ProductCard from "../Card/ProductCard";

interface propsType {
  heading: string;
  itemCategories?: string[];
}

const ProductList = ({ heading, itemCategories }: propsType) => {
  return (
    <section className="mx-auto w-[90vw] bg-white p-6">
      <div className="flex items-center justify-between border-b border-gray-300 pb-2">
        <h1 className="text-xl font-medium">{heading}</h1>
        <ul className="flex gap-4 text-sm text-gray-600 xl:text-base">
          {itemCategories?.map((category) => (
            <li className={` cursor-pointer`} key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 divide-x divide-gray-300 overflow-hidden pt-10 lg:h-[300px] lg:grid-cols-6 xl:h-[360px]">
        {[...Array(7)].map((num, index) => (
          <ProductCard index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
