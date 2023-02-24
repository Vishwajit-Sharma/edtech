import React from 'react'
import HeadingTitle from '../Common/HeadingTitle'
import '../Styles/style.css'
import img1 from '../Assets/team-1.jpg'
import img2 from '../Assets/team-2.jpg'
import { IoEyeSharp } from "react-icons/io5";

const OurStory = () => {
    return (
        <div className="container-xxl py-5 category">
            <div className="container">
                <HeadingTitle title="Story" mainTitle="Our Story" />
                <div className="row g-3">
                    <div className="col-md-6 mb-4">
                        <div className="founder-card">
                            <img src={img1} alt="Founder 1" className="img-fluid founder-img" />
                            <p className='position-absolute d-lg-none text-dark'>Click to <IoEyeSharp/></p>
                            <h3 className='founder-name m-0'>Founder 1</h3>
                            <div className="founder-overlay">
                                {/* <h3>Founder 1</h3> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est vel sem viverra auctor. Sed porta justo eget ligula aliquet porttitor.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam reiciendis distinctio rerum similique adipisci minus sunt tempora minima ullam veniam! Architecto dignissimos ipsa mollitia nam! Totam aspernatur quia labore commodi?
                                    Sequi unde quod, vitae maiores blanditiis quo officia magnam porro labore voluptatem voluptate! Voluptatibus, vero sequi repudiandae laborum unde dolorum quo accusamus modi, iste quod harum est dolore fugiat quasi.
                                    Minima tempore delectus facilis, repellat quisquam dolores expedita enim voluptates ab, fugiat soluta numquam cum quas! Distinctio recusandae adipisci, autem iste quos facere unde sint, iusto quisquam vel dolores cupiditate?
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate nulla quos quas eius possimus tenetur blanditiis. Eius tempora exercitationem unde explicabo, sunt, totam placeat, aliquam repellat architecto ea esse.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className="founder-card">
                            <img src={img2} alt="Founder 1" className="img-fluid founder-img" />
                            <p className='position-absolute d-lg-none text-dark'>Click to <IoEyeSharp/></p>
                            <h3 className='founder-name m-0'>Founder 2</h3>
                            <div className="founder-overlay">
                                {/* <h3>Founder 1</h3> */}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet est vel sem viverra auctor. Sed porta justo eget ligula aliquet porttitor.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam reiciendis distinctio rerum similique adipisci minus sunt tempora minima ullam veniam! Architecto dignissimos ipsa mollitia nam! Totam aspernatur quia labore commodi?
                                    Sequi unde quod, vitae maiores blanditiis quo officia magnam porro labore voluptatem voluptate! Voluptatibus, vero sequi repudiandae laborum unde dolorum quo accusamus modi, iste quod harum est dolore fugiat quasi.
                                    Minima tempore delectus facilis, repellat quisquam dolores expedita enim voluptates ab, fugiat soluta numquam cum quas! Distinctio recusandae adipisci, autem iste quos facere unde sint, iusto quisquam vel dolores cupiditate?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero nulla temporibus autem, voluptas labore quibusdam aspernatur eius commodi! Iusto officiis nam consequuntur architecto temporibus? Exercitationem repellat autem minus ab.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory