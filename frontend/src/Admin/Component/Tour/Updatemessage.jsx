import React from 'react'
import { Container ,Row , Col , Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../../styles/thank-you.css'

const Upsatemessage = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='pt-5 text-center'>
              <div className="thank_you">
                <span>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                <h1 className="mb-3 fw-semibold">Successfully</h1>

                <Button className="btn primary_btn w-25">
                  <Link to="/tour">Back to Tour</Link>
                </Button>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Upsatemessage