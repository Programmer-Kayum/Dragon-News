import React from "react";

const SocialMediaButtons = () => {
  return (
    <div className="flex flex-col items-center mt-6 space-y-3">
      <h1 className="text-lg font-bold text-gray-700 ">Find us on</h1>

      {/* Facebook Button */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center w-64 p-3 space-x-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.462.098 2.794.143v3.24l-1.917.001c-1.504 0-1.795.714-1.795 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .593 23.406 0 22.675 0z" />
        </svg>
        <span className="text-lg font-medium">Facebook</span>
      </a>

      {/* Instagram Button */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center w-64 p-3 space-x-4 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.975 1.257 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.575-.07 4.84c-.063 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.345-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608-.058-1.266-.07-1.646-.07-4.84s.012-3.575.07-4.84c.063-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.735 0 8.332.014 7.052.072 5.773.131 4.482.377 3.447 1.413 2.412 2.448 2.166 3.739 2.107 5.018c-.058 1.28-.072 1.683-.072 4.982s.014 3.702.072 4.982c.059 1.279.305 2.57 1.34 3.606 1.036 1.035 2.327 1.281 3.606 1.34 1.28.058 1.683.072 4.982.072s3.702-.014 4.982-.072c1.279-.059 2.57-.305 3.606-1.34 1.035-1.036 1.281-2.327 1.34-3.606.058-1.28.072-1.683.072-4.982s-.014-3.702-.072-4.982c-.059-1.279-.305-2.57-1.34-3.606-1.036-1.036-2.327-1.282-3.606-1.34C15.668.014 15.265 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324c-2.297 0-4.162-1.865-4.162-4.162S9.703 7.838 12 7.838s4.162 1.865 4.162 4.162-1.865 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.438-.642-1.438-1.438s.642-1.438 1.438-1.438 1.438.642 1.438 1.438-.642 1.438-1.438 1.438z" />
        </svg>
        <span className="text-lg font-medium">Instagram</span>
      </a>

      {/* Twitter Button */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center w-64 p-3 space-x-4 bg-blue-400 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.003.959-3.127 1.184-.897-.955-2.173-1.55-3.591-1.55-2.717 0-4.917 2.207-4.917 4.917 0 .39.045.765.126 1.124-4.083-.205-7.699-2.158-10.126-5.127-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.215 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.394 0-.779-.023-1.17-.067 2.179 1.396 4.768 2.213 7.548 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63.961-.695 1.8-1.562 2.462-2.549l-.047-.02z" />
        </svg>
        <span className="text-lg font-medium">Twitter</span>
      </a>
    </div>
  );
};

export default SocialMediaButtons;
