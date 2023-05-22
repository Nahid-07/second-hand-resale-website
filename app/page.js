import CategoryOfProducts from './categoriesOfProducts/page'
import Navbar from './common-components/Navbar'
import Slider from './common-components/Slider'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider />
    <CategoryOfProducts></CategoryOfProducts>
    </>
  )
}
