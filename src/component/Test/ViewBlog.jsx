import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewBlog = () => {
    const [Data, setData] = useState([])
    const getData=()=>{
        try{
            axios.get("https://kalikablog.onrender.com/blog").then(res=>{
                console.log(res);
                setData(res.data.data)
            }).catch(err=>{
                console.log(err)
            })
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=> {
        getData();
    },[])

  return (
    <div className='mt-12'>
        Title
        {
            Data && <div>
                {
                    Data.map((val, i)=>{
                        return <div key={i}>
                            {val.title}
                            </div>
                    })
                }
            </div>
        }
    </div>
  )
}

export default ViewBlog
