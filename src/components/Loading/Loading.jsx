

const Loading = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
    {
    }
    <div className="relative w-16 h-16">
    <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-400 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
    <div className="absolute top-2 left-2 w-full h-full border-4 border-blue-200 border-t-transparent border-b-transparent rounded-full animate-spin-slow"></div>
    </div>
    {}
    <p className="mt-6 text-xl font-semibold text-blue-700 animate-pulse">
    Cargando, por favor espera...
    </p>
    </div>
);
};

export default Loading;
