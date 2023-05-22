import CategoryOfProducts from './categoriesOfProducts/page'
import Navbar from './common-components/Navbar'
import Slider from './common-components/Slider'
import FeaturedSection from './featuredSection/page'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider />
    <div className='max-w-7xl mx-auto px-3'>
    <CategoryOfProducts></CategoryOfProducts>
    <FeaturedSection></FeaturedSection>
    </div>
    </>
  )
}
