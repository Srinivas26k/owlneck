import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { TrustMetrics } from '../components/home/TrustMetrics';
import { TechPartners } from '../components/home/TechPartners';
import { Differentiator } from '../components/home/Differentiator';
import { FinalCTA } from '../components/home/FinalCTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CyberArc MSP | Enterprise Command Center</title>
        <meta name="description" content="Surgical, Intelligent, Unbreakable IT Services for the modern enterprise." />
      </Helmet>

      <div className="w-full overflow-hidden bg-white">
        <Hero />
        <Services />
        <TrustMetrics />
        <TechPartners />
        <Differentiator />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
