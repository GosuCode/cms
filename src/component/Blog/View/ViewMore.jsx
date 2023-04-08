import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ViewMore = () => {
    const [singleBlog, setSingleBlog] = useState([]);
    const { id } = useParams();

    const getSingleData = async () => {
        try {
            const res = await axios.get(`https://kalikablog.onrender.com/blog/${id}`);
            console.log([res.data.data], " hello")
            setSingleBlog([res.data.data])  //   setSingleBlog(res.data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleData()
    }, [])

    return (
        <div>
            {singleBlog.map((val, i) => {
                return (
                    <div key={i} className='text-center'>
                        <div className='grid justify-center'>
                            <div className='grid justify-center'>
                                <div
                                    className='w-10 h-10 rounded-full bg-lime-500 group-hover:scale-105 transition-all duration-300'
                                    style={{
                                        backgroundImage: `url(${val.image[0].path})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }} />
                            </div>
                            <div>{val.author_name}</div>
                            <div>{val.date}</div>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: val.title }} />
                        <div dangerouslySetInnerHTML={{ __html: val.sub_title }} />

                        <div className='grid grid-cols-3 items-center'>
                            {val.image.map((value, index) => {
                                return (
                                    <img key={index} src={value.path} alt="preview"
                                        className="h-[400px] w-fit col-start-2" />
                                )
                            })}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: val.description }} />
                    </div>
                )
            })}
        </div>
    )
}

export default ViewMore
