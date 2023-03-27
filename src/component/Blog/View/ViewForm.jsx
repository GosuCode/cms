import React from "react";
import axios from "axios";
const ViewForm = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [Index, setIndex] = React.useState(null);

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
    axios.delete(`https://kalikablog.onrender.com/blog/${_id}`);
  };

  return (
    <div className="border-2 mt-12">
      {blogs && (
        <div>
          {blogs.map((val, i) => {
            console.log(val);
            return <div key={i}>{val.name} </div>;
          })}
        </div>
      )}
      <table className="border-2">
        <tr className="border-2">
          <th className="border-2">ID</th>
          <th className="border-2">Title</th>
          <th className="border-2">Subtitle</th>
          <th className="border-2">Description</th>
          <th className="border-2">Image</th>
          <th className="border-2">Action</th>
        </tr>
        {blogs.map((val, i) => {
          return (
            <tr key={i} className="border-2">
              <td className="border-2">{val._id}</td>
              <td className="border-2">{val.title}</td>
              <td className="border-2">{val.sub_title}</td>
              <td>
                <div
                  className={`${Index === i ? "" : "line-clamp-3"
                    } text-justify`}
                  dangerouslySetInnerHTML={{ __html: val.description }}
                />
                <div
                  className="bg-red-500 text-white rounded-lg p-4 mt-6 w-fit"
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  View More
                </div>
              </td>
              <td className="border-2 flex overflow-scroll">
                {val.image.map((value, index) => {
                  return <img key={index} src={value.path} alt="preview" />;
                })}
                <img src={val.image[0].path} className="w-80" alt="img" />
              </td>
              <td>
                <div
                  className="cursor-pointer"
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
