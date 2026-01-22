import React from 'react'

function Position() {
  return (
    <>
    <div className=' bg-black p-6 flex flex-wrap gap-4 mb-[30px]
        [&>div]:w-24
        [&>div]:h-24
        [&>div]:bg-red-500
        [&>div]:border-2
        [&>div]:border-white
        [&>div]:flex
        [&>div]:items-center
        [&>div]:justify-center
        [&>div]:text-white
        '>
<div className="child-1">1</div>
<div className="child-2">2</div>
<div className="child-3">3</div>
<div className="child-4">4</div>
<div className="child-5">5</div>
<div className="child-6">6</div>
<div className="child-7">7</div>
<div className="child-8">8</div>
<div className="child-9">9</div>
<div className="child-10">10</div>
</div>



<div className=' bg-black p-6 grid grid-cols-3 gap-4
justify-items-center 
        [&>div]:w-24
        [&>div]:h-24
        [&>div]:bg-green-500
        [&>div]:border-2
        [&>div]:flex
        [&>div]:items-center
        [&>div]:justify-center
        [&>div]:text-white
        '>
<div >1</div>
<div >2</div>
<div >3</div>
<div >4</div>
<div >5</div>
<div >6</div>
<div >7</div>
<div >8</div>
<div >9</div>
<div className='grid items-center'>10</div>
</div>
</>
  )
}

export default Position
