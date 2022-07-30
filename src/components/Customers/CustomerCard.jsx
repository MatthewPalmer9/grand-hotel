import React from 'react'

export default function CustomerCard({imgSrc, name, description}) {
  return (
    <div className="customer-card">
      <div className="customer-image-wrapper">
        <img src={imgSrc} className="customer-image" alt="Customer" />
      </div>
      <div className="customer-info">
        <h3 className="customer-full-name">{name}</h3>
        <p className="customer-paragraph-1">Happy Customer</p>
        <p className="customer-paragraph-2">
          {`"${description}"`}
        </p>
      </div>
    </div>
  )
}
