import React from 'react'
import { Link } from 'react-router-dom'
export const JotformNav = () => {
  return (
    <>
    <ul className='jotlist'>
	<li className='jot-link'><Link to='/jotform'>BUILD</Link></li>
	<li className='jot-link' ><Link to='/setting'>SETTING</Link></li>
	<li className='jot-link'><Link to='/publish'>PUBLISH</Link></li>

</ul></>
  )
}
export default JotformNav