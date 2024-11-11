import React from "react";
import { Link } from "react-router-dom";

const LoginByGoogle = () => {
  const handleGoogleLogin = () => {
    // Add Google login logic here
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    // Add GitHub login logic here
    console.log("GitHub login clicked");
  };

  return (
    <div className="flex items-center justify-center lg:mx-0 mx-5 bg-gray-100">
      <div className="w-full max-w-md  space-y-3 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign In
        </h2>

        {/* Gmail Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full px-4 py-2 space-x-3 text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out rounded-md"
        >
          {/* Google SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.2 0 5.5 1.4 6.7 2.5l4.9-4.9C32.2 4.3 28.5 3 24 3 14.8 3 7.5 9.8 5.2 18.5l5.8 4.5C12.7 15.6 17.9 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.5-.1-2.6-.4-3.7H24v7.1h13.1c-.5 2.9-2.1 5.2-4.5 6.7l5.8 4.5C42.8 36.6 46.5 31.1 46.5 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.9 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-5.8-4.5C3.7 17.3 3 20.6 3 24s.7 6.7 2.1 9.5l5.8-4.9z"
            />
            <path
              fill="#34A853"
              d="M24 45c5.9 0 10.8-2 14.4-5.5l-5.8-4.5c-2 1.3-4.5 2.1-7.3 2.1-6.1 0-11.3-4.1-13.1-9.7l-5.8 4.5C7.5 38.3 14.8 45 24 45z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* GitHub Login Button */}
        <button
          onClick={handleGithubLogin}
          className="flex items-center justify-center w-full  py-2 space-x-1 text-white bg-gray-800 hover:bg-gray-900 transition duration-300 ease-in-out rounded-md"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.84 9.489.5.09.682-.217.682-.483v-1.773c-2.781.604-3.369-1.336-3.369-1.336-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.07-.607.07-.607 1.003.071 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.832.092-.646.349-1.087.635-1.338-2.22-.252-4.555-1.11-4.555-4.933 0-1.09.39-1.984 1.03-2.683-.103-.252-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.581 9.581 0 0 1 12 6.844a9.565 9.565 0 0 1 2.504.336c1.909-1.294 2.748-1.025 2.748-1.025.545 1.377.202 2.395.1 2.647.64.7 1.03 1.594 1.03 2.683 0 3.832-2.337 4.677-4.565 4.923.36.31.683.92.683 1.855v2.744c0 .267.18.576.688.479A10.012 10.012 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <span>Continue with GitHub</span>
        </button>

        <div className="text-center text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signUp" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginByGoogle;
