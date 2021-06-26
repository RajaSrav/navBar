import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import im1 from './images/i1.jpeg'
import im2 from './images/i2.jpg'
import './org.css'


export class home extends Component {
    render() {
        return (
            <div>
                <Carousel fade className="mx-1">
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={im1}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={im2}
                        alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={im1}
                        alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default home
