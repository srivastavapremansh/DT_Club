import React from 'react'

export function FeatureTwo() {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-8 bg-[#F9FAFB] py-10">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-5">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <img src="src\assets\d1.svg" alt="" srcset="" className='h-10 w-10'/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Empathize</h3>
          <p className="mt-4 text-sm text-gray-600">
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <img src="src\assets\d2.svg" alt="" srcset="" className='h-10 w-10'/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Define</h3>
          <p className="mt-4 text-sm text-gray-600">
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <img src="src\assets\d3.svg" alt="" srcset="" className='h-10 w-10'/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Ideate</h3>
          <p className="mt-4 text-sm text-gray-600">
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <img src="src\assets\d4.svg" alt="" srcset="" className='h-10 w-10'/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Prototype</h3>
          <p className="mt-4 text-sm text-gray-600">
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <img src="src\assets\d5.svg" alt="" srcset="" className='h-10 w-10'/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Test</h3>
          <p className="mt-4 text-sm text-gray-600">
          </p>
        </div>
      </div>
      <hr className="mt-20" />
    </div>
  )
}
