import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUpPage = () => {
  const navigate = useNavigate()

  const [signupData, setSignupData] = useState({name: "",email: "",password: "",})

  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = signupData

    if (!name || !email || !password) {
      setError("Please fill in all fields.")
      return
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError("Email already exists.")
      return
    }

    const newUser = { name, email, password }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users))

    navigate("/login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8 mt-4">
          Join{" "}
          <span className="text-xl font-extrabold text-blue-700">Grabbite</span>{" "}
          in Seconds{" "}
        </p>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={signupData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
