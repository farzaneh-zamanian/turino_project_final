"use client";

function Error({ reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 p-6 rounded-lg shadow-md">
      <p className="text-lg font-semibold text-primary mb-4">مشکلی پیش امده است</p>
      <button 
        onClick={() => reset()} 
        className="px-4 py-2 bg-primary text-white font-bold rounded hover:bg-red-600 transition duration-200"
      >
        تلاش مجدد
      </button>
    </div>
  );
}

export default Error;
