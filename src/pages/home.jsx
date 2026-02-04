import NavigationBar from '../components/navbar'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'
import Footer from '../components/Footer'
import { Container, Row } from 'react-bootstrap'

function Home() {
  return (
    <>
      <NavigationBar />
      <HeroSection />

      <Container className="mt-5">
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          <CardComponent
            title="Portfolio Website"
            text="A modern portfolio built using React and Bootstrap."
          />
          <CardComponent
            title="Landing Page"
            text="Responsive product landing page with clean UI."
          />
          <CardComponent
            title="Dashboard UI"
            text="Simple dashboard layout using reusable components."
          />
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default Home
