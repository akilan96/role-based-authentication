import React from 'react'

const Restricted = () => {
  return (
    <div className='flex justify-center  mt-15'>
      <div className="card card-md bg-neutral text-neutral-content w-80">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Page Restricted!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Restricted
