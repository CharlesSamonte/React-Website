import {
    Navbar,
    Hero,
    About,
    CustomerReview,
    OurServices,
    Contact,
    Footer,
    Shop
} from '../components'

export default function HomePage() {
    return (
        <>
            < Hero />
            < About />
            < CustomerReview />
            < OurServices />
            < Shop />
            < Contact />
        </>
    )
}