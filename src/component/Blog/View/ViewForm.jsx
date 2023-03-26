import React from 'react'
import axios from 'axios'
const ViewForm = () => {
  const [blogs, setBlogs] = React.useState([])
  const getData = () => {
    try {
      axios.get("https://kalikablog.onrender.com/blog").then(res => {
        // console.log(res.data);
        setBlogs(res.data.data)
      }).catch(err => {
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getData();
  }, [])
  const handleDelete =(_id)=>{
axios.delete(`https://kalikablog.onrender.com/blog/${_id}`)
  }

  return (
    <div className='border-2'>
      {
        blogs && <div>
          {
            blogs.map((val, i) => {
              console.log(val)
              return <div key={i}>{val.name} </div>
            })
          }
        </div>
      }
      <table className='border-2'>
          <tr className='border-2'>
          <th className='border-2'>ID</th>
          <th className='border-2'>Title</th>
          <th className='border-2'>subtitle</th>
          <th className='border-2'>description</th>
          <th className='border-2'>image</th>
          <th className='border-2'>Action</th>
        </tr>

        {blogs.map((val, i) => {
          return <tr key={i} className="border-2">
            <td className='border-2'>{val._id.slice(0,5)}</td>
            <td className='border-2'>{val.title}</td>
            <td className='border-2'>{val.sub_title.slice(0,6)}</td>
            <td dangerouslySetInnerHTML={{ __html: val.description.slice(0,600)}}/>
            <td className='border-2 flex overflow-scroll'>
              {val.image.map((value,index)=>{
                return <img key={index}
                src={value.path}
                alt="preview"
                />
              })}
              <img src={val.image[0].path} className="w-80" alt='img'/>
            </td>
            <td>
              <div className='cursor-pointer' onClick={()=>{
                handleDelete(val._id);
              }}>Delete</div>
            </td>
          </tr>
        })}
        <tr>

        </tr>
      </table>
    </div>
  )
}

export default ViewForm
