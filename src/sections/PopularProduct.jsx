import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
const PopularProduct = () => {
  return (
    <section id='products'
     className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold"> Our 
        <span className="text-coral-red"> Popular </span>
         Product</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">These sneakers offer advanced cushioning technology, sleek design, and durable materials for your workouts and everyday fashion. Elevate your footwear game with Nike and conquer each step in style!</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>

    </section>
  )
}

export default PopularProduct