import { Container, Button } from 'react-bootstrap'

function HeroSection() {
  return (
    <div className="hero text-center">
      <Container>
        <h1 className="display-5 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">
          I build modern and responsive web applications using React
        </p>
        <Button variant="light">Get Started</Button>
      </Container>
    </div>
  )
}

export default HeroSection
