import React from 'react';
import Hero from './components/Hero';
import ActionButtons from './components/ActionButtons';
import FeatureList from './components/FeatureList';


function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-emerald-950 to-black text-white flex flex-col items-center overflow-x-hidden font-sans pb-10">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-900/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <Hero />
        <ActionButtons />
        <FeatureList />

      </div>
    </div>
  );
}

export default App;
