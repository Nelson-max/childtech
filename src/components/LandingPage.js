import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import show from '../assets/homeY.png'
import learn from '../assets/africa.png'
import robo from '../assets/robo.png'
import Header from './layout/Header'
import Footer from './layout/Footer'

function LandingPage() {
    return (
        <div >
            <Header />
            <div className="flex w-full min-h-full justify-center items-center" style={{ backgroundColor: '#F5F4F9' }}>
                <div className="p-4 min-w-full max-w-4xl mt-16" style={{ backgroundColor: '#F5F4F9' }}>
                    <div className="flex flex-row sm:flex-col md:flex-col">
                        <div className="flex flex-col text-black space-y-24">
                            <span className="text-4xl ml-8 font-bold mt-16">Our Children, Our future</span>
                            <p className="flex text-xl ml-8 leading-relaxed py-4 font-semibold">
                                Ever thought of improving your children’s eductaion?
                                childTech teaches your child to love technology,
                                improve creativity, logical thinking and problem solving
                                all at a young age.
                            </p>
                            <p className="text-xl ml-8 leading-relaxed mt-0 font-semibold">
                                This program will be having children from 7 years to 14 years, through ChildTech,
                                children will be able to improve their computation skills, problem solving skills,
                                sharpen their minds and increase their level of observation thus being creative.
                            </p>

                            <div className="flex space-x-12 ml-48 pb-32">
                                <span><Button className=" text-xl bg-white text-blue-700 hover:bg-blue-400 rounded-lg mr-16 p-3 ring-2 ring-blue-300 md:ring-blue-500"> <Link to='/login'> Start now </Link> </Button> </span>
                                <span className="animate-pulse inline-flex"><Button className="text-xl rounded-lg p-3 font-semibold leading-tight hover:text-white "><Link to='/booking'>  Book an appointment </Link>  </Button></span>
                            </div>
                        </div>
                        <div className="flex -mr-6 -mt-12 -mb-20">
                            <img src={show} alt="home" />
                        </div>
                    </div>

                    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                        style={{
                            minHeight: "75vh"
                        }}>
                        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-childdren">
                            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                        </div>
                        <div className="container relative mx-auto">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                    <div className="pr-12">
                                        <h1 className="text-white font-semibold text-3xl">
                                            ChildTech is a STEM program that is going to teach children about technology.
                                        </h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                            style={{ height: "70px" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden bg-blue-400"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="text-blue-400 fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>
                    </div>

                    <section className="pb-20 bg-gray-300 -mt-24">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap">
                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-award"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">School program</h6>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">
                                                 Weekend program
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-retweet"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">
                                                 Online program
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-2 flex-auto">
                                            <div className="text-white p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-blue-400">
                                                <i className="fas fa-fingerprint"></i>
                                            </div>
                                            <h6 className="text-xl font-semibold">
                                            Holiday program
                                            </h6>
                                            <p className="mt-2 mb-4 text-gray-600">
                                                Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-wrap items-center mt-32">
                                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-50">
                                        <i className="fas fa-user-friends text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl mb-2 font-bold leading-normal">
                                        Working with ChildTech is a pleasure
                                    </h3>
                                    <p className="text-lg font-bold leading-relaxed mt-4 mb-4 text-gray-900">
                                        ChildTech is looking forward to getting children on their best level of technology
                                        and that is going to change the education system to a better one.
                                    </p>
                                    <p className="text-lg font-bold leading-relaxed mt-0 mb-4 text-gray-900">
                                    ChildTech will be having several courses including the coding part, 
                                    the practical science part and the engineering part, through different 
                                    programs: school program, afterschool program, weekend program and holiday program.
                                    </p>
                                </div>

                                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-400">
                                        <img
                                            alt="..."
                                            src={learn}
                                            className="w-full align-middle rounded-t-lg"/>                                      
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="relative py-20">
                        <div
                            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                            style={{ height: "80px" }}
                        >
                            <svg
                                className="absolute bottom-0 overflow-hidden"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="text-blue-400 fill-current"
                                    points="2560 0 2560 100 0 100"
                                ></polygon>
                            </svg>
                        </div>

                        <div className="container mx-auto px-4">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full md:w-4/12 ml-auto mr-auto px-4  -mr-48">
                                    <img
                                        alt="..."
                                        className="max-w-full rounded-lg h-full"                                 
                                        src={robo} />
                                </div>
                                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                    <div className="md:pr-12">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
                                            <i className="fas fa-rocket text-xl"></i>
                                        </div>
                                        <h3 className="text-3xl font-semibold">
                                            ChildTech main actions
                                        </h3>
                                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        In school children will first be taught how to code in their schools. 
                                        And create their own interactive stories, animations and games.
                                        </p>
                                        <ul className="list-none mt-6">
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-400 mr-3">
                                                            <i className="fas fa-fingerprint"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-600">
                                                            Teach children programming
                                                        </h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-400 mr-3">
                                                            <i className="fab fa-html5"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-600">Engineering/Robotics</h4>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-400 mr-3">
                                                            <i className="far fa-paper-plane"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-gray-600">Practical physics</h4>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </div>

    )
}
export default LandingPage