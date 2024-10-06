import React from 'react'

const UploadedClasses = ({setShowCourses}) => {
  return (
    <>
    <div>
        <span onClick={()=>setShowCourses(true)} className='cursor-pointer'>{"<--back"}</span>
        <h1>Here teacher uploaded course will show.</h1>
    </div>
     </>
  )
}

export default UploadedClasses