import React from 'react'
import { Footer, FooterCopyright } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsDribbble, BsLinkedin} from 'react-icons/bs'

function FooterComp() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg'>Aman's</span>
                            Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 mt-4 gap-8 sm:grid-cols-3 sm-gap-6'>
                        <div>
                            <Footer.Title title='Explore'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    About
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Vision
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Contact
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Instagram
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Linkedin
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Github
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal'/>
                            <Footer.LinkGroup col>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                                <Footer.Link 
                                    href='#'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Cookies
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <FooterCopyright
                        href='#'
                        by="Aman"
                        year={new Date().getFullYear()}
                    />
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook}/>
                        <Footer.Icon href='#' icon={BsInstagram}/>
                        <Footer.Icon href='#' icon={BsTwitterX}/>
                        <Footer.Icon href='#' icon={BsGithub}/>
                        <Footer.Icon href='#' icon={BsDribbble}/>
                        <Footer.Icon href='#' icon={BsLinkedin}/>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComp