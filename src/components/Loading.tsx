import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#11001C] flex items-center justify-center z-50">
      {/* Fusion Core Effect */}
      <div className="relative flex items-center justify-center">
        {/* Outer Glowing Ring */}
        <div className="absolute w-80 h-80 border-[10px] border-[#B200D2] opacity-70 rounded-full animate-glowRing"></div>
        
        {/* Electric Arc Effect */}
        <div className="absolute w-64 h-64 border-[6px] border-[#B200D2] rounded-full animate-electricArcs"></div>
        
        {/* Inner Fusion Core */}
        <div className="absolute w-40 h-40 bg-[#B200D2] opacity-80 blur-3xl rounded-full animate-fusionCore"></div>
        
        {/* Electricity Waves */}
        <div className="absolute w-96 h-96 border-[2px] border-[#B200D2] opacity-50 rounded-full animate-electricWaves"></div>
      </div>
      
      {/* Stylish Headline */}
      <h1 className="absolute text-white text-6xl font-extrabold tracking-wider animate-fadeIn animate-flyIn">
        Loading.....   </h1>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out 2s forwards;
        }

        @keyframes flyIn {
          0% { transform: translateX(-100vw); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-flyIn {
          animation: flyIn 2s ease-out forwards;
        }

        @keyframes glowRing {
          0% { transform: scale(1); opacity: 0.6; filter: blur(8px); }
          50% { transform: scale(1.2); opacity: 1; filter: blur(15px); }
          100% { transform: scale(1); opacity: 0.6; filter: blur(8px); }
        }
        .animate-glowRing {
          animation: glowRing 3s infinite alternate ease-in-out;
        }

        @keyframes electricArcs {
          0% { opacity: 0.5; transform: rotate(0deg); }
          100% { opacity: 1; transform: rotate(360deg); }
        }
        .animate-electricArcs {
          animation: electricArcs 2s linear infinite;
        }

        @keyframes fusionCore {
          0% { transform: scale(1); opacity: 0.7; filter: blur(10px); }
          50% { transform: scale(1.5); opacity: 1; filter: blur(20px); }
          100% { transform: scale(1); opacity: 0.7; filter: blur(10px); }
        }
        .animate-fusionCore {
          animation: fusionCore 3s infinite alternate ease-in-out;
        }

        @keyframes electricWaves {
          0% { opacity: 0.3; transform: scale(1); filter: blur(5px); }
          50% { opacity: 0.6; transform: scale(1.2); filter: blur(10px); }
          100% { opacity: 0.3; transform: scale(1); filter: blur(5px); }
        }
        .animate-electricWaves {
          animation: electricWaves 2.5s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Loading;
