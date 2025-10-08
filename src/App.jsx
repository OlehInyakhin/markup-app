import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Showreel } from '@/components/sections/Showreel';
import { TextAndLogo } from '@/components/sections/TextAndLogo';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { Logos } from '@/components/sections/Logos';
import { Collaborations } from '@/components/sections/Collaborations';
import { Blog } from '@/components/sections/Blog';
import { Ventures } from '@/components/sections/Ventures/Ventures';
import { Follow } from '@/components/sections/Follow/Follow';
import { CallToAction } from '@/components/sections/CallToAction';

import {
  LiquidBackground,
  LiquidBackgroundPresets,
} from '@/components/common/LiquidBackground';
import { Preloader } from '@/components/common/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {!isLoading && (
        <>
          <LiquidBackground
            {...LiquidBackgroundPresets.purple}
            opacity={0.4}
            zIndex={-1}
          />

          <Header />
          <main className="main-content">
            <Hero />
            <Showreel />
            <TextAndLogo />
            <Services />
            <Logos />
            <Work />
            <Blog />
            <Collaborations />
            <Ventures />
            <Follow />
            <CallToAction />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
