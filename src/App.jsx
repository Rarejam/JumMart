import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center flex-col gap-10">
      <div className="fixed -top-20 -right-20 z-50 w-64 h-64 hover:scale-150 transition cursor-pointer shadow-lg bg-blue-400 rounded-full flex items-center justify-center active:scale-100 text-white font-bold"></div>
      <div className="fixed top-64 left-24 z-[1] w-64 h-64 hover:scale-150 transition cursor-pointer shadow-lg bg-blue-400 rounded-full flex items-center active:scale-100 justify-center text-white font-bold"></div>

      <div className="fixed top-20 left-[250] hover:scale-150 transition z-[5] shadow-lg w-64 h-64 active:scale-100 cursor-pointer bg-blue-400 rounded-full flex items-center justify-center text-white font-bold"></div>
      <div className="fixed bottom-5 left-[250] hover:scale-150 transition z-[5] shadow-lg w-28 h-28 bg-blue-400 cursor-pointer active:scale-100 rounded-full flex items-center justify-center text-white font-bold"></div>
      <div className="fixed bottom-14 left-[520px] hover:scale-150 transition shadow-lg z-[5] w-20 h-20 bg-blue-400 rounded-full cursor-pointer active:scale-100 flex items-center justify-center text-white font-bold"></div>

      <div className="fixed bottom-10 right-20 hover:scale-150 transition z-[5] shadow-lg w-16 h-16 bg-blue-400 rounded-full cursor-pointer flex items-center justify-center active:scale-100 text-white font-bold"></div>
      <div className="fixed bottom-[75px] hover:scale-150 transition right-64 z-[5] shadow-lg w-16 h-16 bg-blue-400 cursor-pointer rounded-full flex items-center justify-center active:scale-100 text-white font-bold"></div>
      <div className="fixed bottom-36 hover:scale-150 transition right-40 z-[1] shadow-lg w-16 h-16 bg-blue-400 rounded-full cursor-pointer flex items-center justify-center active:scale-100 text-white font-bold"></div>
      <div className="fixed top-36 left-40 z-[5] w-16 h-16 hover:scale-150 transition shadow-lg bg-blue-400 rounded-full flex cursor-pointer items-center justify-center active:scale-100 text-white font-bold"></div>
      <div className="fixed top-36 right-40 z-[5] w-16 h-16 hover:scale-150 transition shadow-lg bg-blue-400 rounded-full cursor-pointer flex items-center justify-center active:scale-100 text-white font-bold"></div>

      <div className="fixed top-0 -left-40 z-[5] w-64 h-64 hover:scale-150 transition shadow-lg bg-blue-400 rounded-full cursor-pointer flex items-center justify-center active:scale-100 text-white font-bold"></div>

      <div className="z-10">
        <h1 className="text-white text-7xl cursor-pointer hover:text-green-400  transition font-extrabold duration-300">
          TAILWIND ACTIVE
        </h1>
      </div>
      <div className="flex items-center justify-center w-screen">
        <div className="bg-white cursor-not-allowed  h-20 z-10 flex justify-center shadow-lg items-center text-2xl font-bold text-gray-400 w-[500px] ">
          first
        </div>
        <Link
          to="/market"
          className="h-44 w-80 z-10 flex cursor-pointer items-center justify-center text-4xl hover:[text-shadow:0_4px_12px_rgba(0,0,0,0.45)]  bg-white italic text-gray-500 rounded-lg hover:drop-shadow-lg  hover:shadow-[0_0_25px_5px_rgba(255,0,255,0.7)]
 hover:text-gray transition duration-300"
        >
          ACTIVE_iate
        </Link>
        <div className="bg-white cursor-not-allowed h-20 shadow-lg flex z-[2] justify-center items-center font-serif text-gray-400 text-2xl w-[500px] ">
          last
        </div>
      </div>
    </div>
  );
}
