import React from 'react'
import Input from '../../Inputs/Input'

const AddForm = () => {
  return (
    <div className='mt-12'>
      <h2 className='text-4xl'>Create Blog</h2><br />
      <form action="">
        <table>
          <tr>
            <td><label htmlFor="title">Title</label></td>
            <td><Input/></td>
          </tr>
          <tr>
            <td><label htmlFor="subTitle">Sub Title</label></td>
            <td><Input/></td>
          </tr>
          <tr>
            <td><label htmlFor="authorName">Author Name</label></td>
            <td><Input/></td>
          </tr>
          <tr>
            <td><label htmlFor="description">Description</label></td>
            <td><textarea cols="60" rows="5"
        placeholder="What's on your mind?"
        className='border-2 border-slate-600'></textarea></td>
          </tr>
          <tr>
            <td><label htmlFor="images">Images</label></td>
          </tr>
          <tr>
            <td><button type='button'
        className='border-2 border-slate-600 w-20'>Post</button></td>
          </tr>
        </table>

      </form>
    </div>
  )
}

export default AddForm
