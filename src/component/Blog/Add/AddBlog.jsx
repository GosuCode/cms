import React, { useState } from "react";
import { Formik, Form, Field,  } from "formik";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("The name is required"),
  sub_title: yup.string().required("The name is required"),
  author_name: yup.string().required("The name is required"),
  date: yup.string().required("The name is required"),
  description: yup.string().required("The name is required"),
});
const FormField = [
  {
    name: "title",
    type: "text",
  },
  {
    name: "sub_title",
    type: "text",
  },
  {
    name: "author_name",
    type: "text",
  },
  {
    name: "date",
    type: "date",
  },
  {
    name: "description",
    type: "text",
  },
  {
    name: "image",
    type: "file",
    // image: [
    //   {
    //     path: "",
    //   },
    // ],
  },
];

const AddBlog = () => {
  const [showimage, setShowImage] = useState("");
  const [newImage, setImage] = useState([]);

  const handleImageChange = (event) => {
    setShowImage(event.target.files[0]);
    setImage([...newImage, event.target.files[0]]);
  };

  // const handleImageChange = (event) => {
  //   // console.log(event.target.files[0]);
  //   setImage(event.target.files[0]);
  //   // const files = e.target.files;
  //   // const formDataArray = [];
  //   // for (let i = 0; i < files.length; i++) {
  //   //     const formData = new FormData();
  //   //     formData.append('image', files[i]);
  //   //     formDataArray.push(formData);
  //   // }

  //   // setFormDataArray(formDataArray);
  // };
  const postFormData = async (value) => {
    const formData = new FormData();
    formData.append("title", value.title);
    formData.append("sub_title", value.sub_title);
    formData.append("author_name", value.author_name);
    formData.append("date", value.date);
    formData.append("description", value.description);
    for (let i = 0; i < newImage.length; i++) {
      formData.append("image", newImage[i]);
    }
    console.log(newImage);
    try {
      await axios.post(`https://kalikablog.onrender.com/blog`, formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-12">
      {/* field title,sub_title,author_name,date,description,image */}
      <Formik
        initialValues={{
          title: "",
          sub_title: "",
          author_name: "",
          date: "",
          description: "",
          image: [],
        }}
        validationSchema={schema}
        onSubmit={(val) => {
          console.log(val);
          postFormData(val);
        }}>
        {({ handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              {FormField.map((val, i) => {
                return (
                  <div
                  key={i}
                  className="grid grid-cols-12">
                    <label htmlFor={val.name} className="capitalize col-span-2">{val.name}</label>
                    {val.type === "file" ? (
                      <div>
                        <img
                          src={
                            showimage
                              ? URL.createObjectURL(showimage)
                              : ""
                          }
                          width={100}
                          alt=""
                          className="mt-2"
                        />
                        <input
                          type={val.type}
                          name={val.name}
                          accept=".png,.jpg,.jpeg,.gif"
                          required
                          multiple
                          onChange={(e) => handleImageChange(e)}
                          className=""
                        />
                      </div>
                    ) : (
                      <Field
                        type={val.type}
                        name={val.name}
                        placeholder={`enter your ${val.name}`}
                        className="col-span-4 border-2 border-gray-400 mt-2"
                      />
                    )}
                  </div>
                );
              })}
              <button type="submit" className="border-2 border-gray-800 rounded-md">submit</button>
            </Form>
          );
        }}
      </Formik>
      {/* <ErrorMessage /> */}
      <ToastContainer />
    </div>
  );
};

export default AddBlog;
