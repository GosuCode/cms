import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Inner = () => {
    const [blogs, setBLogs] = useState([])

    const getData = async () => {
        try {
            await axios
                .get("https://kalikablog.onrender.com/blog")
                .then((res) => {
                    setBLogs(res.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div>
                {blogs.map((val, i) => {
                    return (
                        <div>
                            <div className='rounded-full w-12 bg-cyan-600 mr-[10px]'
                                style={{
                                    backgroundImage: `url(${val.image[0].path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}></div>
                            <div>{val.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Inner
