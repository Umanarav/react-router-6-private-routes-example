import {useNavigate} from "react-router-dom"

const Login = () => {
	const navigate = useNavigate()

	//ADMIN
	//USER

	const login = () => {
		localStorage.setItem("user", JSON.stringify({role: "USER"}))
		navigate("/dashboard")
	}

	const adminLogin = () => {
		localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
		navigate("/dashboard")
	}

	return (
		<div className="login">
			<h2>Welcome to the login page! </h2>
			<p>Please login to continue</p>
			<button onClick={login}> User Login</button>

			<button onClick={adminLogin}> Admin Login</button>
		</div>
		
	)
}

export default Login
