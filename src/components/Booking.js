import React, { useState} from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Robot from '../assets/children.png'



function Booking() {
    const [activeTab, setActiveTab] = useState('parent')
    const [display, setDisplay] = useState('none')

    let chooseInitake = {
        display: display
    }

    function intake(e) {
        if (e.target.value === "2") {
            setDisplay('block')
        }
    }


    return (
        <div>
            <Header/>
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg" style={{ backgroundColor: '#F5F4F9' }}>
                    <div className="flex ml-28 m-6 lg:py-12 lg:flex lg:justify-center">
                        <div className="px-6 w-1/2 mt-28 md:rounded-lg sm:h-full">
                            <img src={Robot} alt="robot" />
                        </div>
                        <div className="ml-16">
                            <h1 className="font-bold mb-8 text-xl text-center">Book your appointment here.</h1>
                            <div className='flex justify-center space-x-16 text-2xl pb-16'>
                                <button type='button' onClick={() => {
                                    setActiveTab('parent')
                                }} className={`${activeTab === 'parent' && 'text-blue-500'} ring ring-2 rounded px-2 `} >Parent</button>
                                <button className={`${activeTab !== 'parent' && 'text-blue-500'} ring ring-2 rounded px-2`} type='button' onClick={() => {
                                    setActiveTab('school')
                                }}>School</button>
                            </div>
                            {/* parent booking */}
                            {
                                activeTab === 'parent' ?
                                    <Form className="mr-6">
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Parent Names</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Parent ID</Form.Label>
                                                <Form.Control type="number" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridPhone">
                                                <Form.Label>Telephone</Form.Label>
                                                <Form.Control type="number" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Child's name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">                                        
                                        <Form.Group as={Col} controlId="formGridState">
                                                <Form.Group as={Col} controlId="formGridPhone">
                                                    <Form.Label>Child's Birth Date</Form.Label>
                                                    <Form.Control type="date" placeholder="" />
                                                </Form.Group>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Choose Course</Form.Label>
                                                <Form.Select defaultValue="Choose...">
                                                    <option>Coding</option>
                                                    <option>Engineering/Robotics</option>
                                                    <option>Practical science</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Choose Program</Form.Label>
                                                <Form.Select onChange={(e) => intake(e)} defaultValue="Choose...">
                                                    <option value="1">Weekend</option>
                                                    <option value="2"> Holiday</option>
                                                    <option value="3">Online</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <div style={chooseInitake}>
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Choose intake</Form.Label>
                                                    <Form.Select defaultValue="Choose...">
                                                        <option>December holiday</option>
                                                        <option>April holiday</option>
                                                        <option>June holiday</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridPhone">
                                                <Form.Label>Address & Location</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Group as={Col} controlId="formGridPhone">
                                                    <Form.Label>Prefered studing Date</Form.Label>
                                                    <Form.Control type="date" placeholder="" />
                                                </Form.Group>
                                            </Form.Group>
                                        </Row>
                                        
                                        <Button variant="primary" type="submit" className="flex justify-center w-28" >
                                            Submit
                                        </Button>
                                    </Form> :

                                    // school booking

                                    <Form className="mr-6">
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Headmaster/Mistress name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>School name</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridPhone">
                                                <Form.Label>Telephone</Form.Label>
                                                <Form.Control type="number" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridPhone">
                                                <Form.Label>Number of children</Form.Label>
                                                <Form.Control type="number" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridPhone">
                                                <Form.Label>Address & Location</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Choose Program</Form.Label>
                                                <Form.Select onChange={(e) => intake(e)} defaultValue="Choose...">
                                                    <option value="1">School</option>
                                                    <option value="2">Holiday</option>
                                                    <option value="3">Weekend</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <div style={chooseInitake}>
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>Choose intake</Form.Label>
                                                    <Form.Select defaultValue="Choose...">
                                                        <option>December holiday</option>
                                                        <option>April holiday</option>
                                                        <option>June holiday</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Choose Course</Form.Label>
                                                <Form.Select defaultValue="Choose...">
                                                    <option>Coding</option>
                                                    <option>Engineering/Robotics</option>
                                                    <option>Practical science</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Group as={Col} controlId="formGridPhone">
                                                    <Form.Label>Prefered Date</Form.Label>
                                                    <Form.Control type="date" placeholder="" />
                                                </Form.Group>
                                            </Form.Group>
                                        </Row>
                                        <Button variant="primary" type="submit" className="flex justify-center w-28" >
                                            Submit
                                        </Button>
                                    </Form>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Booking