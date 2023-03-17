import React from "react"
import WithPermission from "./WithPermission"

const Tab3 = () => {
	return (
		<div className="tab3">
			<h2>Welcome to Tab3 page</h2>
			<WithPermission roleRequired="ADMIN" message="Only Admin can view this, your current role is user">
				<h1>Welcome Admin! (only admins can see this)</h1>
				
			</WithPermission>
		</div>
	)
}

export default Tab3
