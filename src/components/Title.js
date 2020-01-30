import React from 'react'

export default function Title({name, title}) {
  return (
    <div className="row">
      <div className="col-10  mt-3 text-title">
        <h3 className="text-capitalize font-weight-bold">
            { name } <strong className="text-blue">{ title }</strong>
        </h3>
      </div>

    </div>
  )
}
