import React from 'react';
import WithPermission from './WithPermission';

const  Dashboard=() =>{
  return <div className='dashboard'>
     <h1>Welcome to the main Dashboard</h1>
     <WithPermission roleRequired="ADMIN" message="Role: User">
				<h3>Role: Admin</h3>
				
			</WithPermission>
  </div>;
}

export default Dashboard;
