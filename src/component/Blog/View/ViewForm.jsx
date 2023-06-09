import React, { useState, useCallback, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Link,
  //  useNavigate
} from "react-router-dom";
const ViewForm = () => {
  const [blogs, setBlogs] = useState([]);
  // const [Index, setIndex] = useState(null);
  const [toggle, setToggle] = useState([])
  // const navigate = useNavigate();

  const TableHeader = [
    {
      name: "ID"
    },
    {
      name: "Title"
    },
    {
      name: "Author"
    },
    {
      name: "SubTitle"
    },
    {
      name: "Description"
    },
    {
      name: "Image"
    },
    {
      name: "Action"
    },
  ]
  const getData = () => {
    try {
      axios
        .get("https://kalikablog.onrender.com/blog")
        .then((res) => {
          // console.log(res.data);
          setBlogs(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const handleDelete = (_id) => {
    try {

      axios.delete(`https://kalikablog.onrender.com/blog/${_id}`).then(res => {
        if (res.status === 200) {
          setToggle(!toggle);
          toast.success("The data is deleted");
          console.log("Data Gone Boy!!")
        }
      });
    } catch (error) {
      console.log(error)
    }
  };

  const newCallBack = useCallback(() => {
    getData();
  }, [])

  const newData = useMemo(() => newCallBack(), [toggle]);

  return (
    <div className="mt-12">

      <table className="w-full">
        {/* Table heading */}
        <tr>
          {
            TableHeader.map((val, i) => {
              return <th className="border-2" key={i}>{val.name}</th>
            })
          }

        </tr>
        {blogs.map((val, i) => {
          return (
            <tr key={i} className="border-2 text-center">
              <td className="border-2">{i + 1}</td>
              <td className="border-2">{val.title}</td>
              <td className="border-2">{val.author_name}</td>
              <td className="border-2">{val.sub_title}</td>
              <td>
                <div
                  className={`${null === i ? "" : "line-clamp-3"
                    } text-justify`}
                  dangerouslySetInnerHTML={{ __html: val.description }}
                />
                {/* <div
                  className={`text-blue-500 cursor-pointer`}
                  // ${i ? "hidden" : "block"}
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  View More
                </div>
                <div
                  className={`text-blue-500 rounded-lg p-2 cursor-pointer`}
                  // ${see === "no" ? "hidden" : "block"}
                  onClick={() => {
                    setIndex(!i);
                  }}>
                  View Less
                </div> */}
              </td>
              <td className="border-2 flex overflow-scroll col-span-1">
                {val.image.map((value, index) => {
                  return (
                    <img key={index} src={value.path} alt="preview" className="h-[200px] w-[500px]" />
                  )
                })}
              </td>
              <td className="border-2 mx-4">

                <Link to={`/viewmore/${val._id}`}> <div
                  className="cursor-pointer text-center text-white rounded-md bg-[#00C9A7]">
                  View More
                </div>

                </Link>

                {/* <div onClick={() => navigate(`/item/${val._id}`)} className="cursor-pointer">View More</div> */}

                <div
                  className="cursor-pointer p-2 text-white rounded-md bg-[#ff0000]"
                  onClick={() => {
                    handleDelete(val._id);
                  }}
                >
                  Delete
                </div>
              </td>
            </tr>
          );
        })}
        <tr></tr>
      </table>
    </div>
  );
};

export default ViewForm;
