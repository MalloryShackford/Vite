import WorkImg from '../assets/utr_ss.png'
import Tinder from '../assets/tinder_ss.png'
import Twitter from '../assets/twitter_ss.png'
import OpenSea from '../assets/opensea_ss.png'
import Facebook from '../assets/fb_ss.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid */}
          <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
             <span className="text-2xl font-bold text-white tracking-wider">Under the Radar</span>
             <div className="pt-8 text-center">
              <a href="https://www.cheftimmaslow.com/utr)">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"> Demo</button>
              </a>
              <a href="https://github.com/MalloryShackford/utr-offish">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
             </div>
             </div></div>
        
          {/* Grid */}
          <div style={{backgroundImage: `url(${Tinder})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
             <span className="text-2xl font-bold text-white tracking-wider">Tinder React App</span>
             <div className="pt-8 text-center">
              <a href="https://client-psi-wheat.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"> Demo</button>
              </a>
              <a href="https://github.com/MalloryShackford/tinder-build">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
             </div>
             </div>
             </div>
    
       
          {/* Grid */}
          <div style={{backgroundImage: `url(${Twitter})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
             <span className="text-2xl font-bold text-white tracking-wider">Twitter React App</span>
             <div className="pt-8 text-center">
              <a href="https://brilliant-sopapillas-6fd86d.netlify.app/">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"> Demo</button>
              </a>
              <a href="https://github.com/MalloryShackford/twitter">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
             </div>
             </div></div>
      
          {/* Grid */}
          <div style={{backgroundImage: `url(${OpenSea})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
             <span className="text-2xl font-bold text-white tracking-wider">OpenSea Crypto App *wallet needed</span>
             <div className="pt-8 text-center">
              <a href="https://os-clone-seven.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"> Demo</button>
              </a>
              <a href="https://github.com/MalloryShackford/os-clone">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
             </div>
             </div>
             </div>
          <div style={{backgroundImage: `url(${Facebook})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
             <span className="text-2xl font-bold text-white tracking-wider">Facebook React App</span>
             <div className="pt-8 text-center">
              <a href="https://rainbow-praline-272e56.netlify.app/">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"> Demo</button>
              </a>
              <a href="https://github.com/MalloryShackford/facebook-clone">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
             </div>
             </div></div>
      
          {/* Grid */}
          {/* <div style={{backgroundImage: `url(${Tinder})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"> */}
            
            {/* Hover Effects */}
            {/* <div className="opacity-0 group-hover:opacity-100">
             <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
             <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg"> Demo</button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Code</button>
              </a>
             </div>
             </div>
             </div>
       </div> */}
             </div></div></div>
            
             
    )}
export default Work