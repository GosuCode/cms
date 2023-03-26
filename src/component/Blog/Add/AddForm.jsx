import React from 'react'

const AddForm = () => {
  return (
    <div className='mt-12'>
      <h2 className='text-4xl'>Create Blog</h2><br />
      <form action="">
        <textarea cols="60" rows="5"
        placeholder="What's on your mind?"
        className='border-2 border-slate-600'></textarea><br />
        <button type='button'
        className='border-2 border-slate-600 w-20'>Post</button>
      </form>
    </div>
  )
}

export default AddForm
