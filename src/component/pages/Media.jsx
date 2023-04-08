import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Media = () => {
  const [data, setData] = useState([])

  const getData = () => {
    try {
      axios
        .get("https://kalikablog.onrender.com/blog")
        .then((res) => {
          // console.log(res.data);
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className='grid grid-cols-3 p-4 gap-4'>
      {
        data.map((val, i) => {
          return (<div key={i}>
            <Link to={`/viewmore/${val._id}`}>
              <div className='h-[280px] w-full bg-lime-500 group-hover:scale-105 transition-all duration-300'
                style={{
                  backgroundImage: `url(${val.image[0].path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }} />
            </Link>
            {/* <img
              src={val.image[0].path}
              alt=""
            /> */}
          </div>
          )
        })
      }
    </div>
  )
}

export default Media
