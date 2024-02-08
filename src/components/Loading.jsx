const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin mr-2">
        <svg
          className="w-8 h-8 text-blue-900"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path
            d="M4 12h2v4l9-4-9-4H4zm6 0h2v4l9-4-9-4H10z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
      <p className="text-blue-500 font-bold">Loading...</p>
    </div>
  );
};

export default Loading;
