import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt='offer' width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3"> Special </span> Offer
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selectionsto incredible savings, we offer unparrallel value that set apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectation. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label='Shop Now' iconURL={arrowRight}/>
        <Button label={'Learn More'} backgroundColor={'bg-white'} borderColor={'border-slate-gray'} textColor={'text-slate-gray'}  />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer