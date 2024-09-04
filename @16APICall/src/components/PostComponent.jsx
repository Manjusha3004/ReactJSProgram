import React from 'react'

 const PostComponent = ({value,handlePageChange, handleSubmit, data}) => {
  return (
    <>
    <input className='block w-10 border-solid text-sm ' type="text"
    placeholder={'Enter ID'}
    value={value}
    onChange={handlePageChange}
    />
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-50 rounded-3xl' onClick={handleSubmit} >Submit</button>
    {data && <div>{data?.title}</div>}
    </>
  )
}

export default PostComponent