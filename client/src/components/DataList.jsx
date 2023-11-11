import React from 'react'
import Select from "react-dropdown-select";

function DataList() {
    

  return (
    <div>
        <Select className='custom-select' options={options} onChange={(values) => this.setValues(values)} />
    </div>
  )
}

export default DataList