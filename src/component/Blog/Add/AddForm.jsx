import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("The title is required"),
  sub_title: yup.string().required("The sub title is required"),
  author_name: yup.string().required("The author name is required"),
  // date: yup.number().required("The date is required"),
  description: yup.string().required("The description is required"),

  // image: yup.mixed()
  //   .required('Please upload an image')
  //   .test('fileType', 'Invalid file type', (value) => {
  //     if (value) {
  //       return ['image/png', 'image/jpeg', 'image/gif'].includes(value.type);
  //     }
  //     return true;
  //   })
  //   .test('fileSize', 'File size too large', (value) => {
  //     if (value) {
  //       return value.size <= 5000000; // 5MB
  //     }
  //     return true;
  //   }),
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
  },
];

const AddForm = () => {
  const [showimage, setShowImage] = useState("");
  const [newImage, setImage] = useState([]);

  const handleImageChange = (event) => {
    setShowImage(event.target.files[0]);
    setImage([...newImage, event.target.files[0]]);

  };

  const postFormData = async (value) => {
    console.trace("who called upon me?")
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
      await axios.post("https://kalikablog.onrender.com/blog", formData);

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

        validationSchema={schema}          //passing schema

        onSubmit={(val) => {
          console.log("🚀 ~ file: AddForm.jsx:86 ~ AddForm ~ val:", val)
          postFormData(val);
        }}>

        {({ handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              {FormField.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="grid grid-cols-6">
                    <label htmlFor={val.name} className="capitalize col-span-1 mt-8">
                      {val.name}
                    </label>

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
                          className="mt-8"
                        />
                        <input                       //Input field
                          type={val.type}
                          name={val.name}
                          accept=".png,.jpg,.jpeg,.gif"
                          multiple
                          onChange={(e) => handleImageChange(e)}
                          className=""
                        />
                      </div>
                    ) : (
                      <div className="col-span-5 flex mt-8">
                        <Field
                          type={val.type}
                          name={val.name}
                          placeholder={`Enter your ${val.name}`}
                          className="border-2 border-gray-400 pl-2 focus:outline-none rounded-md"
                        />
                        <p className="text-red-600 text-sm pl-4"><ErrorMessage name={val.name} /></p>
                      </div>
                    )}
                  </div>
                );
              })}
              <button type="submit" className="rounded-md bg-[#845EC2] mt-8 text-white p-2">submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddForm;
