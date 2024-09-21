import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './home.css';
import VideoUpload from '../components/VideoUpload';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/mensajes');
    };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='bgx'>
           {/*
            <VideoUpload/>
            */}
           
            <Navbar></Navbar>
            
            <div className='gradient-wrapper'></div>
            {isModalOpen && (
                <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Person 1
                                </h3>
                                <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className="p-4 md:p-5 space-y-4">
                                <form action="#">
                                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                        <div class="sm:col-span-2">
                                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">System Prompt</label>
                                            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here">
                                                You are a Call Assistant to collect feedback on conferences. Your goal is to ask questions in a friendly and professional manner to obtain valuable information. Follow these steps during the call:

                                                1. greet the customer warmly and wait for their response.
                                                - Example, “Hi! Hope you're having a good day, how are you feeling?”

                                                2. Ask for his or her name and company, as well as the Gonzalo conference he or she attended.
                                                - Example: “For starters, could you tell me your name and company name? Also, which of Gonzalo's lectures did you attend?”

                                                3. Inquire about his general opinion and what aspects caught his attention the most.
                                                - Example, “In general terms, what did you think of the conference? Was there anything in particular that caught your attention?”

                                                4. Ask if you would recommend the same lecture to other colleagues.
                                                - Example, “Would you recommend this conference to other colleagues in your company?”

                                                5. Thank the client for his or her time and say a cordial goodbye.
                                                - Example: “Thank you so much for your time and responses! It was a pleasure talking to you. It's been a pleasure talking with you - have a great day!”
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                        <div class="sm:col-span-2">
                                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Persona Context</label>
                                            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here">
                                                Jhonny is a call center worker in charge of interviewing customers to collect their testimonials.
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button onClick={handleClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                        <button onClick={closeModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            <div class="relative isolate px-6 pt-14 lg:px-8">
                <div class="mx-auto max-w-2xl py-8 sm:py-12 lg:py-12">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-primary-50 sm:text-6xl">Video APIs <br/> for digital twins</h1>
                        <p class="mt-6 text-lg leading-8 text-primary-50 homepara">Build immersive AI-generated video experiences in your application</p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="/signup" class="btnx text-primary-50">Sign Up For Free</a>
                            <a href="#" class="btnx second text-primary-50 ">Talk to Sales <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
                <div class="mx-auto max-w-2xl py-8 sm:py-12 lg:py-12">
                    <div>
                        <video id="05157fd0-a544-b5e8-31ac-e32514face93-video" autoplay="" loop="" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f%2F66bc17f4f868bc9ce77ddf71_Option-1-Website-Main-Demo-Carter-Silent-transcode.mp4" data-wf-ignore="true"/><source src="https://cdn.prod.website-files.com/63b2f566abde4cad39ba419f%2F66bc17f4f868bc9ce77ddf71_Option-1-Website-Main-Demo-Carter-Silent-transcode.webm" data-wf-ignore="true" ></source></video>
                    </div>
                </div>
            </div>
            {/*
            <section className="dark:bg-gray-900" data-modal-target="default-modal" data-modal-toggle="default-modal">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Person Libray</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Start and Join Now</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                        <div onClick={openModal} className="cursor-pointer items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="images\p1.png" alt="Michael Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Person 1</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Voice of a Senior Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Drives the technical strategy of the flowbite platform and brand.</p>
                            </div>
                        </div>

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Lana Byrd</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the flowbite platform and brand.</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */}
        </div>
    );
};

export default Home;