import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa'

const ViewMore = () => {
    const [singleBlog, setSingleBlog] = useState([]);
    const { id } = useParams();

    const getSingleData = async () => {
        const res = await axios.get(`https://kalikablog.onrender.com/blog/${id}`);
        console.log([res.data.data], " hello")
        setSingleBlog([res.data.data])  //   setSingleBlog(res.data);
    }

    useEffect(() => {
        getSingleData()
    }, [])

    return (
        <div>
            {singleBlog.map((val, i) => {
                return (
                    <div key={i} className=''>
                        <div>
                            <div className='w-10 h-10 rounded-full bg-lime-500 group-hover:scale-105 transition-all duration-300'
                                style={{
                                    backgroundImage: `url(${val.image[0].path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }} />
                            <div>{val.author_name}</div>
                            <div>{val.date}</div>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: val.title }} />
                        <div dangerouslySetInnerHTML={{ __html: val.sub_title }} />

                        <div>
                            {val.image.map((value, index) => {
                                return (
                                    <img key={index} src={value.path} alt="preview" className="h-[200px] w-fit" />
                                )
                            })}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: val.description }} />
                    </div>
                )
            })}
            <hr />
            <div>
                <span>Share</span>
                <div className='flex'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaPinterest />
                </div>
            </div>
        </div>
    )
}

export default ViewMore
